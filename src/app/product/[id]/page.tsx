"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import Card from "@/app/(components)/Card/Card";
import Loader from "@/app/(components)/Loader/Loader";
import { Button } from "@/components/ui/button";
import star from "@/app/imgs/PaymentImg/Star.png";
import RatingReview from "@/app/(components)/items/RatingReview";
import Faq from "@/app/(components)/items/Faq";
import ProductInfo from "@/app/(components)/items/ProductInfo";
import { useParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs"; // Import Clerk useAuth hook
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Item = () => {
  const { id } = useParams(); // Assuming you use Next.js useRouter hook for getting id
  const [data, setData] = useState<any>(null);
  const [relatedItems, setRelatedItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { userId } = useAuth(); // Get the userId from Clerk
  const [quantity, setQuantity] = useState<number>(1); // Initialize quantity state
  const [buttonText, setButtonText] = useState<string>("Add to Cart"); // Initialize button text
  const [colorOptions, setColorOptions] = useState([
    { name: "yellow", isActive: false },
    { name: "black", isActive: true },
    { name: "blue", isActive: false },
  ]);
  const { toast } = useToast();

  const [sizeOptions, setSizeOptions] = useState([
    { name: "Small", isActive: false },
    { name: "Medium", isActive: true },
    { name: "Large", isActive: false },
    { name: "X-Large", isActive: false },
  ]);

  // Fetch data for the selected item and related items
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/item/${id}`); // Fetch item details
      const result = await response.json();
      setData(result.data);

      // Fetch related items based on the category or other criteria
      const relatedResponse = await fetch(
        `/api/category/${result.data.item_type}`
      ); // Adjust endpoint based on your API design
      const relatedResult = await relatedResponse.json();
      setRelatedItems(relatedResult.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const addToCart = async () => {
    if (!userId) {
      return;
    }

    const selectedColor = colorOptions.find((c) => c.isActive)?.name || "";
    const selectedSize = sizeOptions.find((s) => s.isActive)?.name || "";

    const itemData = {
      id: data._id, // Assuming _id is the identifier from your data
      category: data.category,
      item_type: data.item_type,
      rate: data.rate,
      imageUrl: data.imageUrl,
      title: data.title,
      discount: data.discount || 0, // Set discount to 0 if undefined
      price: data.price,
      discountPercent: data.discountPercent || 0, // Set discountPercent to 0 if undefined
      colors: selectedColor, // Send the selected color
      size: selectedSize, // Send the selected size
      quantity, // Send the updated quantity
    };

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          item: itemData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const result = await response.json();

      setButtonText("Added to Cart"); // Change the button text upon successful addition
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleColorClick = (index: number) => {
    setColorOptions((prevColors) =>
      prevColors.map((color, i) => ({
        ...color,
        isActive: i === index,
      }))
    );
  };

  const handleSizeClick = (index: number) => {
    setSizeOptions((prevSizes) =>
      prevSizes.map((size, i) => ({
        ...size,
        isActive: i === index,
      }))
    );
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  // Loading state while fetching data
  if (loading) {
    return (
      <div className="h-[80vh] w-[95vw] flex justify-center items-center ">
        <Loader />
      </div>
    );
  }

  // If no data found for the given id
  if (!data) {
    return <div>No data found</div>;
  }

  // Render stars based on rating
  const divArray = Array(data.rate).fill(0);

  // Options for product details navigation
  const ratingComp = [
    { name: "Product Details", isActive: false },
    { name: "Rating & Reviews", isActive: true },
    { name: "FAQs", isActive: false },
  ];

  return (
    <div className="p-4">
      {/* Product Images and Basic Details */}
      <Breadcrumb className="ml-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${data.category}`}>
              {data.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${data.item_type}`}>
              {data.item_type}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full mx-auto flex p-4 pb-6 mb-4">
        <div className="h-[75vh] w-3/4 flex">
          {/* Color options */}
          <div className="w-3/10">
            {colorOptions.map((colorOption, index) => (
              <div
                key={index}
                className={`mb-4 mr-4 cursor-pointer ${
                  colorOption.isActive ? "ring-2 ring-black" : ""
                }`}
                onClick={() => handleColorClick(index)}
              >
                <Image
                  src={data.imageUrl} // Assuming imageUrl is part of data received from API
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-2xl h-[10.6rem] w-full"
                />
                {colorOption.isActive && (
                  <BsCheckLg className="text-2xl absolute top-2 right-2 text-white" />
                )}
              </div>
            ))}
          </div>
          {/* Main product image */}
          <div className="w-7/10 flex justify-center items-center pr-4">
            <Image
              src={data.imageUrl} // Assuming imageUrl is part of data received from API
              alt=""
              width={500}
              height={500}
              className="object-cover rounded-2xl h-full w-full"
            />
          </div>
        </div>
        {/* Product details and controls */}
        <div className="pl-4">
          <h1 className="text-4xl font-black mb-4">{data.title}</h1>
          {/* Product rating */}
          <div className="flex items-center gap-1 mb-4">
            {divArray.map((_, index) => (
              <Image
                key={index}
                src={star}
                alt="star"
                width={20}
                height={20}
                className="h-8 w-8"
              />
            ))}
            <p className="text-lg font-normal">{`${data.rate}.0/5`}</p>
          </div>
          {/* Product price and discount */}
          <div className="flex gap-8 mb-4">
            {data.discount ? (
              <>
                <h2 className="text-2xl font-bold">{`$${data.discount}`}</h2>
                <p className="text-2xl font-bold text-gray-400 line-through">{`$${data.price}`}</p>
                <div className="flex justify-center items-center bg-red-100 rounded-2xl h-9 px-6 text-red-500 text-lg">
                  {`-${data.discountPercent}%`}
                </div>
              </>
            ) : (
              <h2 className="text-2xl font-bold">{`$${data.price}`}</h2>
            )}
          </div>
          {/* Product description */}
          <p className="text-base font-normal text-gray-600 mb-4">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          {/* Select colors */}
          <hr className="border-gray-200 py-2" />
          <p className="text-base font-normal text-gray-600">Select Colors</p>
          <div className="flex gap-4 my-4">
            {colorOptions.map((c, index) => (
              <div
                key={index}
                className={`bg-${
                  c.name
                }-500 border border-black rounded-full w-9 h-9 flex items-center justify-center cursor-pointer ${
                  c.isActive ? "ring-2 ring-black" : ""
                }`}
                onClick={() => handleColorClick(index)}
              >
                {c.isActive && <BsCheckLg className="text-2xl" />}
              </div>
            ))}
          </div>
          {/* Select size */}
          <hr className="border-gray-200 py-2" />
          <p className="text-base font-normal text-gray-600 mb-4">
            Choose Size
          </p>
          <div className="flex gap-4 mb-4">
            {sizeOptions.map((size, index) => (
              <button
                key={index}
                className={`flex justify-center items-center py-2 px-4 rounded-full  text-base font-normal text-gray-600 transition w-28 h-12 mb-4 cursor-pointer ${
                  size.isActive ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => handleSizeClick(index)}
              >
                {size.name}
              </button>
            ))}
          </div>
          {/* Quantity selection and add to cart button */}
          <hr className="border-gray-200 py-2" />
          <div className="flex gap-8">
            <div className="flex w-44 h-12 p-4 rounded-full justify-between items-center bg-gray-200 text-lg">
              <button className="text-4xl" onClick={decrementQuantity}>
                -
              </button>
              <p>{quantity}</p>
              <button className="text-4xl" onClick={incrementQuantity}>
                +
              </button>
            </div>
            <Button
              className="w-100 h-12 p-4 rounded-full bg-black text-white"
              onClick={() => {
                addToCart();
                toast({
                  title: "Item added to cart",
                  description:
                    "The item has been successfully added to your cart.",
                  action: <ToastAction altText="Undo">Undo</ToastAction>,
                });
              }}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Product details navigation */}
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-9/12 flex justify-evenly items-center mb-4">
          {ratingComp.map((rate, index) => (
            <button
              key={index}
              className={`text-xl font-medium text-center transition p-4 w-full h-full border-b border-gray-200 cursor-pointer ${
                rate.isActive ? "border-b-black" : ""
              }`}
            >
              {rate.name}
            </button>
          ))}
        </div>
        {/* Conditionally render product information, rating & reviews, and FAQs */}
        <div>{ratingComp[0].isActive && <ProductInfo />}</div>
        <div>{ratingComp[1].isActive && <RatingReview />}</div>
        <div>{ratingComp[2].isActive && <Faq />}</div>
      </div>

      {/* Related products */}
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-4xl font-black mb-4 text-center uppercase">
          You might also like
        </h1>
        <div className="w-full flex justify-center flex-wrap gap-6">
          {/* Render related products as cards */}
          {relatedItems.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
