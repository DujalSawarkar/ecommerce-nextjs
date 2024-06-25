"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiSearchLine, RiArrowDropDownLine } from "react-icons/ri";
import Cookies from "js-cookie";
import shopco from "@/app/imgs/SHOP.CO.png";

const Navbar = () => {
  const router = useRouter();

  const handleCartClick = () => {
    const token = Cookies.get("token");
    console.log(token);

    if (!token) {
      router.push("/login");
    } else {
      router.push("/cart");
    }
  };

  return (
    <>
      <div className="flex justify-around items-center p-4 bg-white h-[11vh]">
        <div className="flex-shrink-0 pl-5">
          <Link href="/">
            <Image src={shopco} alt="Your Logo" width={208} height={52} />
          </Link>
        </div>
        <div className="flex justify-center items-center w-[80%] mx-6">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Link
                href="/category"
                className="flex justify-center items-center text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                Shop <RiArrowDropDownLine />
              </Link>
            </div>
            <div>
              <Link
                href="/category"
                className="text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                On Sales
              </Link>
            </div>
            <div>
              <Link
                href="/category"
                className="text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                New Arrivals
              </Link>
            </div>
            <div>
              <Link
                href="/category"
                className="text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                Brands
              </Link>
            </div>
          </div>
          <div className="relative flex-1 mx-4">
            <input
              className="w-full h-12 text-gray-400 bg-gray-200 rounded-full pl-12"
              type="text"
              placeholder="Search for products..."
            />
            <RiSearchLine className="absolute top-4 left-4" />
          </div>
        </div>
        <div className="flex justify-around items-center w-[13%] mt-2.5">
          <button
            onClick={handleCartClick}
            className="text-black ml-2.5 text-2xl"
          >
            <FaShoppingCart />
          </button>
          <Link href="/login" className="text-black ml-2.5 text-2xl">
            <HiOutlineUserCircle />
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
