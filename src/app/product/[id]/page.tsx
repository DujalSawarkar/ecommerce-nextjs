"use client";

import React, { useState, useEffect } from "react";
import star from "@/app/imgs/PaymentImg/Star.png";
import { BsCheckLg } from "react-icons/bs";
import Image from "next/image";
import RatingReview from "@/app/(components)/items/RatingReview";
import Faq from "@/app/(components)/items/Faq";
import ProductInfo from "@/app/(components)/items/ProductInfo";
import { useParams } from "next/navigation";
import Card from "@/app/(components)/Card/Card";
import Loader from "@/app/(components)/Loader/Loader";
import { Button } from "@/components/ui/button";

const Item = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [relatedItems, setRelatedItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/item/${id}`);
      const result = await response.json();
      setData(result.data);

      // Fetch related items based on the category
      const item = result.data.item_type; // Ensure category is the correct field
      const relatedResponse = await fetch(`/api/category/${item}`);
      const relatedResult = await relatedResponse.json();
      setRelatedItems(relatedResult.data); // Ensure you're accessing the correct part of the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="h-[80vh] w-[95vw] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const ratingComp = [
    { name: "Product Details", isActive: false },
    { name: "Rating & Reviews", isActive: true },
    { name: "FAQs", isActive: false },
  ];

  const color = [
    { name: "bg-[#7b7bbd]", isActive: false },
    { name: "bg-[#bd7b7b]", isActive: true },
    { name: "bg-[#7bbd7e]", isActive: false },
  ];

  const sizeOptions = [
    { name: "Small", isActive: false },
    { name: "Medium", isActive: true },
    { name: "Large", isActive: false },
    { name: "X-Large", isActive: false },
  ];

  const divArray = Array(data.rate).fill(0);

  return (
    <div>
      <div className="w-full mx-auto flex p-4 pb-6 mb-4">
        <div className="h-[75vh] w-3/4 flex">
          <div className="w-3/10">
            {color.map((colorOption, index) => (
              <div key={index} className="mb-4 mr-4">
                <Image
                  src={data.imageUrl}
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-2xl h-[10.6rem] w-full"
                />
              </div>
            ))}
          </div>
          <div className="w-7/10 flex justify-center items-center pr-4">
            <Image
              src={data.imageUrl}
              alt=""
              width={500}
              height={500}
              className="object-cover rounded-2xl h-full w-full"
            />
          </div>
        </div>
        <div className="pl-4">
          <h1 className="text-4xl font-black mb-4">{data.title}</h1>
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
          <p className="text-base font-normal text-gray-600 mb-4">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="border-gray-200 py-2" />
          <p className="text-base font-normal text-gray-600">Select Colors</p>
          <div className="flex gap-4 my-4">
            {color.map((c, index) => (
              <div
                key={index}
                className={`${c.name} border border-black rounded-full w-9 h-9 flex items-center justify-center`}
              >
                {c.isActive && <BsCheckLg className="text-2xl" />}
              </div>
            ))}
          </div>
          <hr className="border-gray-200 py-2" />
          <p className="text-base font-normal text-gray-600 mb-4">
            Choose Size
          </p>
          <div className="flex gap-4 mb-4">
            {sizeOptions.map((size, index) => (
              <button
                key={index}
                className={`flex justify-center items-center py-2 px-4 rounded-full  text-base font-normal text-gray-600 transition w-28 h-12 mb-4 ${
                  size.isActive ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>
          <hr className="border-gray-200 py-2" />
          <div className="flex gap-8">
            <div className="flex w-44 h-12 p-4 rounded-full justify-between items-center bg-gray-200 text-lg">
              <button className="text-4xl">-</button>
              <p>0</p>
              <button className="text-4xl">+</button>
            </div>
            <Button className="w-100 h-12 p-4 rounded-full bg-black text-white">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-9/12 flex justify-evenly items-center mb-4">
          {ratingComp.map((rate, index) => (
            <button
              key={index}
              className={`text-xl font-medium text-center transition p-4 w-full h-full border-b border-gray-200 ${
                rate.isActive ? "border-b-black" : ""
              }`}
            >
              {rate.name}
            </button>
          ))}
        </div>
        <div>{ratingComp[0].isActive && <ProductInfo />}</div>
        <div>{ratingComp[1].isActive && <RatingReview />}</div>
        <div>{ratingComp[2].isActive && <Faq />}</div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-4xl font-black mb-4 text-center uppercase">
          You might also like
        </h1>
        <div className="w-full flex justify-center flex-wrap gap-6">
          {relatedItems.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
