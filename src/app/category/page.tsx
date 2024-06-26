import Link from "next/link";
import React from "react";

const category = () => {
  return (
    <div className=" h-[10vh] w-[100vw] flex justify-center items-center">
      go to category by cliking on categories shown on home page or  
      <Link href="/category/formals" className="text-blue-400 ml-1">   Click Here</Link>
    </div>
  );
};

export default category;
