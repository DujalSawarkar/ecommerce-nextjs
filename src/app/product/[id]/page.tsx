"use client";

import React from "react";

// import star from "../../public/imgs/PaymentImg/star.png";
import { BsCheckLg } from "react-icons/bs";
import Image from "next/image";
import { GetServerSideProps } from "next";
import axios from "axios";
import RatingReview from "@/app/(components)/RatingReview";
import Faq from "@/app/(components)/Faq";
import ProductInfo from "@/app/(components)/ProductInfo";
import { useParams } from "next/navigation";
import Data2 from "@/Data2.js";
import Cards from "@/app/(components)/Card/Cards";

interface ItemProps {
  initialData: any;
}

const Item: React.FC<ItemProps> = () => {
  const { id } = useParams();
  // const { itemtype } = query;
  const initialData: any = {
    id: 1,
    title: "Cool Graphic T-Shirt",
    imageUrl: "/imgs/tshirt1.png",
    rate: 4,
    price: 30.0,
    discount: 25.0,
    discountPercent: 16,
  };

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

  const Sizebtn = [
    { name: "Small", isActive: false },
    { name: "Medium", isActive: true },
    { name: "Large", isActive: false },
    { name: "X-Large", isActive: false },
  ];

  const divArray = Array(initialData.rate).fill(0);

  return (
    <div>
      {/* <RouteCard /> */}
      <div className="w-full mx-auto flex px-4 pb-6 mb-4">
        <div className="h-[75vh] w-3/4 flex">
          <div className="w-3/10">
            <div className="mb-4 mr-4">
              <Image
                src={initialData.imageUrl}
                alt=""
                width={500}
                height={500}
                className="rounded-2xl h-[10.6rem] w-full"
              />
            </div>
            <div className="mb-4 mr-4">
              <Image
                src={initialData.imageUrl}
                alt=""
                width={500}
                height={500}
                className="rounded-2xl h-[10.6rem] w-full"
              />
            </div>
            <div className="mb-4 mr-4">
              <Image
                src={initialData.imageUrl}
                alt=""
                width={500}
                height={500}
                className="rounded-2xl h-[10.6rem] w-full"
              />
            </div>
          </div>
          <div className="w-7/10 flex justify-center items-center pr-4">
            <Image
              src={initialData.imageUrl}
              alt=""
              width={500}
              height={500}
              className="object-cover rounded-2xl h-full w-full"
            />
          </div>
        </div>
        <div className="pl-4">
          <h1 className="text-4xl font-black mb-4">{initialData.title}</h1>
          <div className="flex items-center gap-1 mb-4">
            {divArray.map((_, index) => (
              // <Image
              //   key={index}
              //   src={star}
              //   alt="star"
              //   width={20}
              //   height={20}
              //   className="h-8 w-8"
              // />

              <h1>hhhh</h1>
            ))}
            <p className="text-lg font-normal">{`${initialData.rate}.0/5`}</p>
          </div>
          <div className="flex gap-8 mb-4">
            {initialData.discount ? (
              <>
                <h2 className="text-2xl font-bold">{`$${initialData.discount}`}</h2>
                <p className="text-2xl font-bold text-gray-400 line-through">{`$${initialData.price}`}</p>
                <div className="flex justify-center items-center bg-red-100 rounded-2xl h-9 px-6 text-red-500 text-lg">
                  {`-${initialData.discountPercent}%`}
                </div>
              </>
            ) : (
              <h2 className="text-2xl font-bold">{`$${initialData.price}`}</h2>
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
            {Sizebtn.map((size, index) => (
              <button
                key={index}
                className={`flex justify-center items-center py-2 px-4 rounded-full bg-gray-200 text-base font-normal text-gray-600 transition w-28 h-12 mb-4 ${
                  size.isActive ? "bg-black text-white" : ""
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>
          <hr className="border-gray-200 py-2" />
          <div className="flex gap-8">
            <div className="flex w-44 h-13 p-4 rounded-full justify-between items-center bg-gray-200 text-lg">
              <button className="text-4xl">-</button>
              <p>0</p>
              <button className="text-4xl">+</button>
            </div>
            <button className="w-100 h-13 p-4 rounded-full bg-black text-white">
              Add to Cart
            </button>
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
        <div className="w-full flex flex-wrap gap-6">
          <Cards head="You might also like" />
          {/* {initialData[1].map((e, index) => (
            <Card key={index} data={e} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { itemtype, id } = context.query;

//   const res = await axios.get(
//     `http://localhost:4000/items/${itemtype}?id=${id}`
//   );
//   const initialData = res.data;

//   return {
//     props: {
//       initialData,
//     },
//   };
// };

export default Item;
