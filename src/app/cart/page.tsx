"use client";

import React, { useEffect, useState } from "react";
import { FiTag } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Loader from "../(components)/Loader/Loader";

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
}

const Cart = () => {
  const { userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchCartData = async () => {
    try {
      if (!userId) throw new Error("User ID is undefined");
      const response = await fetch(`/api/cart/${userId}`);
      const result = await response.json();
      console.log("Cart data:", result);
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
                      <RiDeleteBin5Fill className="text-red-500 cursor-pointer" />
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Size: {item.size}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Color: {item.colors}
                    </div>
                    <div className="flex items-center">
                      <p className="text-xl font-semibold text-gray-900 mr-2">
                        ${item.discount ? item.discount : item.price}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Button className="w-8 h-8 bg-gray-300 text-xl font-semibold leading-none">
                          -
                        </Button>
                        <span className="text-base">{item.quantity}</span>
                        <Button className="w-8 h-8 bg-gray-300 text-xl font-semibold leading-none">
                          +
                        </Button>
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
              <h3 className="text-base font-semibold">
                ${getTotal("subtotal")}
              </h3>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-base text-gray-600">Discount</p>
              <h4 className="text-base font-semibold">
                -${getTotal("discount")}
              </h4>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-base text-gray-600">Delivery Fee</p>
              <h3 className="text-base font-semibold">$15</h3>
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className="flex justify-between mb-4">
              <p className="text-base text-gray-600">Total</p>
              <h3 className="text-base font-semibold">
                ${getTotal("subtotal") - getTotal("discount") + 15}
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
            <Button className="w-full h-12 rounded-full bg-black text-white font-semibold">
              Go to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
