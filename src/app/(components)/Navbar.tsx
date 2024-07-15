"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import shopco from "@/app/imgs/SHOP.CO.png";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="mx-auto flex items-center p-2 justify-between h-[11vh]">
        <div className="flex items-center space-x-6">
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden text-gray-900 text-2xl hover:text-gray-600">
                <FaBars />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                {/* <SheetDescription>Select a category</SheetDescription> */}
              </SheetHeader>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/category"
                  className="flex items-center text-gray-900 text-lg font-medium hover:text-gray-600"
                >
                  Shop
                </Link>
                <Link
                  href="/category"
                  className="text-gray-900 text-lg font-medium hover:text-gray-600"
                >
                  On Sales
                </Link>
                <Link
                  href="/category"
                  className="text-gray-900 text-lg font-medium hover:text-gray-600"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/category"
                  className="text-gray-900 text-lg font-medium hover:text-gray-600"
                >
                  Brands
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-shrink-0 pl-5">
            <Link href="/">
              <Image src={shopco} alt="Your Logo" width={208} height={52} />
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-center items-center mx-6">
          <div className="flex space-x-6">
            <Link
              href="/category"
              className="flex items-center text-gray-900 text-lg font-medium hover:text-gray-600"
            >
              Shop
            </Link>
            <Link
              href="/category"
              className="text-gray-900 text-lg font-medium hover:text-gray-600"
            >
              On Sales
            </Link>
            <Link
              href="/category"
              className="text-gray-900 text-lg font-medium hover:text-gray-600"
            >
              New Arrivals
            </Link>
            <Link
              href="/category"
              className="text-gray-900 text-lg font-medium hover:text-gray-600"
            >
              Brands
            </Link>
          </div>
          <div className="relative flex-1 mx-4">
            <input
              className="w-full h-12 bg-gray-100 rounded-full pl-12 pr-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              type="text"
              placeholder="Search for products..."
            />
            <RiSearchLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/cart"
            className="text-gray-900 text-2xl hover:text-gray-600"
          >
            <FaShoppingCart />
          </Link>
          <SignedOut>
            <SignInButton afterSignUpUrl="/" afterSignInUrl="/" mode="redirect">
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};

export default Navbar;
