import React from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import tick from "@/app/imgs/tick.png";
import star from "@/app/imgs/PaymentImg/Star.png";
interface CommentProps {
  data: {
    id: number;
    rayte: number;
    name: string;
    discription: string;
    date: string;
  };
}

const Comment: React.FC<CommentProps> = ({ data }) => {
  return (
    <div className="p-3">
      <div
        key={data.id}
        className="w-96 bg-white shadow-md rounded-xl border border-gray-300 p-4 mb-4"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: data.rayte }, (_, index) => (
              <Image key={index} src={star} alt="star" width={16} height={16} />
            ))}
          </div>
          <BsThreeDots className="text-gray-500" />
        </div>
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-bold mr-2">{data.name}</h2>
          <Image src={tick} alt="verified" width={20} height={20} />
        </div>
        <p className="text-base text-gray-600 mb-4">{data.discription.slice(0,130)}..</p>
        <div className="text-xs font-medium text-gray-500">{`Posted on ${data.date}`}</div>
      </div>
    </div>
  );
};

export default Comment;
