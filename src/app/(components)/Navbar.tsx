import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiSearchLine, RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center p-4 bg-white h-[11vh]">
        <div className="flex-shrink-0 pl-5">
          <Link href="/">
            <Image
              src="/imgs/SHOP.CO.png"
              alt="Your Logo"
              width={208}
              height={52}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center w-[80%] mx-6">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Link
                href="/shop"
                className="flex justify-center items-center text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                Shop <RiArrowDropDownLine />
              </Link>
            </div>
            <div>
              <Link
                href="/on-sales"
                className="text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                On Sales
              </Link>
            </div>
            <div>
              <Link
                href="/new-arrivals"
                className="text-black text-xl p-2 hover:border-b-2 border-gray-300"
              >
                New Arrivals
              </Link>
            </div>
            <div>
              <Link
                href="/brands"
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
            <RiSearchLine />
          </div>
        </div>
        <div className="flex justify-around items-center w-[13%] mt-2.5">
          <Link href="/cart" className="text-black ml-2.5 text-2xl">
            <FaShoppingCart />
          </Link>
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
