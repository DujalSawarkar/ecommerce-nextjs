import React from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import Comment from "../Comments";
const Data2 = [
  {
    id: 1,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 2,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 3,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 4,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 5,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 6,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
];
const RatingReview = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center h-28 p-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-black">All Reviews</h2>
          <p className="ml-2 text-base text-gray-600 mt-1">(451)</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray-200">
            <HiOutlineAdjustmentsVertical className="text-xl" />
          </div>
          <button className="flex items-center justify-between bg-gray-200 w-30 h-12 px-5 rounded-full">
            Latest <RiArrowDownSLine className="ml-2" />
          </button>
          <button className="w-42 h-12 px-8 bg-black text-white rounded-full">
            Write a Review
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {Data2.map((e: any, index) => (
          <Comment data={e} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RatingReview;
