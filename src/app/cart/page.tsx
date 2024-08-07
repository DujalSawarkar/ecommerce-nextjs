// your component file
"use client";

// declare var Razorpay: any;
import Razorpay from "razorpay";

import React, { useEffect, useState } from "react";
import { FiTag } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Loader from "../(components)/Loader/Loader";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
interface CartItem {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  discount?: number;
  discountPercent?: number;
  category: string;
  item_type: string;
  rate: number;
  colors: string;
  size: string;
  quantity: number;
  _id: string;
}

const Cart = () => {
  const { toast } = useToast();
  const { userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchCartData = async () => {
    try {
      if (!userId) throw new Error("User ID is undefined");
      const response = await fetch(`/api/cart/${userId}`);
      const result = await response.json();
      if (result.success) {
        setCart(result.data.items);
      } else {
        console.error("Failed to fetch cart data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (itemId: string) => {
    try {
      const response = await fetch(`/api/cart/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });
      const result = await response.json();
      fetchCartData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handlePayment = async () => {
    const amount = getTotal("subtotal") - getTotal("discount") + 15;
    const currency = "INR";
    const receipt = "receipt#1720796823782";

    try {
      const response = await axios.post("/api/razorpay", {
        amount,
        currency,
        receipt,
      });

      const { data } = await response;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.data.amount,
        currency: data.data.currency,
        name: "SHOP>CO",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id,
        handler: function (response: any) {
          console.log(response.razorpay_payment_id);
          // console.log(response.razorpay_order_id);
          // console.log(response.razorpay_signature);
        },
        prefill: {
          name: "Dujal Sawarkar",
          email: "Dujalsawarkar5@gmail.com",
          contact: "8605090478",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Wait for Razorpay script to be fully loaded
      const loadRazorpay = async () => {
        if (!window.Razorpay) {
          await new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = resolve;
            document.head.appendChild(script);
          });
        }
      };

      await loadRazorpay();

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCartData();
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="h-[80vh] w-[95vw] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const getTotal = (type: "subtotal" | "discount") => {
    return cart.reduce((total, item) => {
      if (type === "subtotal") {
        return total + item.price;
      } else if (type === "discount") {
        return total + (item.discount ? item.price - item.discount : 0);
      }
      return total;
    }, 0);
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <Breadcrumb className="ml-8 mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold leading-10 uppercase text-gray-900 mb-8">
          Your Cart
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8 bg-gray-100 border border-gray-300 rounded-xl p-4">
            {cart.length === 0 ? (
              <div className="flex justify-center items-center py-16">
                <p className="text-xl text-gray-600">
                  Your cart is empty. Start shopping now!
                </p>
                <Link href="/category/formals">Shop now</Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h2>
                      <RiDeleteBin5Fill
                        className="text-red-500 cursor-pointer"
                        onClick={() => {
                          handleDelete(item._id);
                          toast({
                            title: "Removed",
                            description: "Item removed succesdully",
                            action: (
                              <ToastAction altText="Goto schedule to undo">
                                Undo
                              </ToastAction>
                            ),
                          });
                        }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Size: {item.size}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Color: {item.colors}
                    </div>
                    <div className="flex items-center">
                      <p className="text-xl font-semibold text-gray-900 mr-2">
                        ₹{item.discount ? item.discount : item.price}
                      </p>
                      <div className="flex items-center space-x-2">
                        {/* <Button className="w-8 h-8 bg-gray-300 text-xl font-semibold leading-none">
                          -
                        </Button> */}
                        <span className="text-base font-semibold">
                          Quantity : {item.quantity}
                        </span>
                        {/* <Button className="w-8 h-8 bg-gray-300 text-xl font-semibold leading-none">
                          +
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-base text-gray-600">Subtotal</p>
              <h3 className="text-base font-bold">
                ₹{getTotal("subtotal")}
              </h3>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-base text-gray-600">Discount</p>
              <h4 className="text-base font-bold text-red-600">
                - ₹{getTotal("discount")}
              </h4>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-base text-gray-600">Delivery Fee</p>
              <h3 className="text-base font-bold"> ₹15</h3>
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className="flex justify-between mb-4">
              <p className="text-base text-gray-600">Total</p>
              <h3 className="text-base font-bold">
                ₹{getTotal("subtotal") - getTotal("discount") + 15}
              </h3>
            </div>
            <div className="flex items-center mb-4">
              <FiTag className="text-base text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-52 h-12 px-4 border border-gray-300 rounded-full text-base text-gray-600"
              />
              <Button className="w-24 h-12 px-4 bg-black text-white font-semibold ml-2">
                Apply
              </Button>
            </div>
            <Button
              className="w-full h-12 rounded-full bg-black text-white font-semibold"
              onClick={handlePayment}
            >
              Go to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
