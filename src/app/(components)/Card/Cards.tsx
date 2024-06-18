import React, { useState } from "react";
import Card from "./Card";

import Data2 from "@/Data2.js";
interface DataType {
  _id: string;
  name: string;
  description: string;
}

const Cards: React.FC<{ head: string }> = ({ head }) => {
  const [view, setView] = useState(false);
  const Data: any = Data2;

  return (
    <div className="flex flex-col items-center justify-center m-16 transition duration-800 ease-in-out">
      <h1 className="text-4xl font-extrabold leading-tight text-center">
        {head}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 m-8">
        {(view ? Data : Data.slice(0, 4)).map((data : any) => (
          <Card key={data._id} data={data} />
        ))}
      </div>
      <button
        className="w-56 h-12 text-xl rounded-full border border-gray-200 transition duration-300 ease-in-out hover:bg-black hover:text-white"
        onClick={() => setView(!view)}
      >
        {view ? "View Less" : "View All"}
      </button>
    </div>
  );
};

export default Cards;
