"use client";

import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import axios from "axios";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/app/(components)/Loader/Loader";
import Card from "@/app/(components)/Card/Card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slider } from "@/components/ui/slider";

const Category = () => {
  const router = useRouter();

  const navigateToCategory = (category: string) => {
    router.push(`/category/${category}`);
  };
  const [catData, setCatData] = useState([]);
  const cloths = ["T-Shirt", "shorts", "shirt", "hoodie", "jeans"];
  const color = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-black",
    "bg-white",
  ];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const dressStyle = ["casuals", "formals", "party", "gym"];

  const { id } = useParams() as { id: string };

  const [filterHide, setFilterHide] = useState(true);
  const [price, setPrice] = useState(true);
  const [Color, setColor] = useState(true);
  const [Size, setSize] = useState(true);
  const [Style, setStyle] = useState(true);

  const changeHandler = (state: any, setState: any) => {
    setState((prev: any) => !prev);
  };

  const fetchProductsByCategory = async (category: string) => {
    try {
      const data = await axios.get(`/api/category/${id}`);

      setCatData(data.data.data); // Ensure the response structure matches this
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductsByCategory(id);
    } else {
      // Handle invalid categoryId, e.g., redirect to home or show an error
      console.warn(`Invalid category ID: ${id}`);
    }
  }, [id]);

  return (
    <div>
      <div className="ml-16 mt-5 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {/* <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem> */}
            {/* <BreadcrumbSeparator /> */}
            <BreadcrumbItem>
              <BreadcrumbLink href="/category/formals">Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-[95%] flex gap-[2rem] mx-auto categoryBody mt-10 mb-10">
        <div
          className={
            filterHide
              ? "border border-gray-200 rounded-[30px] p-[2rem] h-fit"
              : "border border-gray-200 rounded-[30px] p-[2rem] h-[95px] filterMain2"
          }
        >
          <div className="flex justify-between items-center w-[245px]">
            <h1 className="text-2xl font-bold text-left text-black">Filters</h1>
            <HiOutlineAdjustmentsVertical
              className="text-gray-400 w-[20.25px] h-[18.75px] transition-colors duration-300 hover:cursor-pointer hover:text-black"
              onClick={() => changeHandler(filterHide, setFilterHide)}
            />
          </div>
          {filterHide && (
            <>
              <hr className="my-[1rem]" />
              <div className="filter-Div2">
                {cloths.map((e) => (
                  <div
                    key={e}
                    className="flex justify-between items-center my-[1rem]"
                  >
                    <h1 className="text-lg font-normal text-left text-gray-600">
                      {e}
                    </h1>
                    <IoIosArrowForward
                      className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                      onClick={() => navigateToCategory(e)}
                    />
                  </div>
                ))}
              </div>
              <hr className="my-[1rem]" />
              <div>
                <div className="flex justify-between items-center w-[245px]">
                  <h1 className="text-2xl font-bold text-left text-black">
                    Price
                  </h1>
                  <IoIosArrowUp
                    className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                    onClick={() => changeHandler(price, setPrice)}
                  />
                </div>
                {/* Uncomment the following block if you have a price filter implemented */}
                {price && (
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="my-6"
                    // {...props}
                  />
                )}
              </div>
              <hr className="my-[1rem]" />
              <div className="flex justify-between items-center w-[245px]">
                <h1 className="text-2xl font-bold text-left text-black">
                  Colors
                </h1>
                <IoIosArrowUp
                  className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                  onClick={() => changeHandler(Color, setColor)}
                />
              </div>
              {Color && (
                <div className="grid grid-cols-5 gap-[1rem] my-[1rem]">
                  {color.map((e) => (
                    <div
                      key={e}
                      className={`${e} w-[37px] h-[37px] border-2 border-gray-200 rounded-full`}
                    ></div>
                  ))}
                </div>
              )}
              <hr className="my-[1rem]" />
              <div className="flex justify-between items-center w-[245px]">
                <h1 className="text-2xl font-bold text-left text-black">
                  Size
                </h1>
                <IoIosArrowUp
                  className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                  onClick={() => changeHandler(Size, setSize)}
                />
              </div>
              {Size && (
                <div className="grid grid-cols-2 gap-[0.5rem] my-[1rem]">
                  {sizes.map((e) => (
                    <button
                      key={e}
                      className="flex justify-center items-center py-[0.5rem] px-[0.2rem] rounded-full bg-gray-200 text-lg font-normal text-left text-gray-600 transition-colors duration-200 hover:bg-black hover:text-white"
                    >
                      {e}
                    </button>
                  ))}
                </div>
              )}
              <hr className="my-[1rem]" />
              <div className="flex justify-between items-center w-[245px]">
                <h1 className="text-2xl font-bold text-left text-black">
                  Dress Style
                </h1>
                <IoIosArrowUp
                  className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                  onClick={() => changeHandler(Style, setStyle)}
                />
              </div>
              {Style && (
                <div>
                  {dressStyle.map((style) => (
                    <div
                      key={style}
                      className="flex justify-between items-center my-[1rem]"
                    >
                      <h1 className="text-lg font-normal text-left text-gray-600">
                        {style.charAt(0).toUpperCase() + style.slice(1)}
                      </h1>
                      <IoIosArrowForward
                        className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                        onClick={() => navigateToCategory(style)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="category-main flex flex-col gap-[2rem]">
          <div className="w-[70vw] flex justify-between">
            <h1 className="text-[32px] font-bold text-left capitalize">{id}</h1>
            <div className="flex items-center sortFilter">
              <p> Sort by : </p>
              <h5> Most Popular</h5>
              <RiArrowDropDownLine />
            </div>
          </div>

          {catData.length === 0 ? (
            <div className="mt-[25%] ml-[50%]">
              <Loader />
            </div>
          ) : (
            <div className=" flex flex-wrap gap-[3rem] ">
              {catData.map((item: any) => (
                <Card data={item} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pagination flex flex-col items-center">
        <hr className="w-[68vw]" />
        {/* <UsePagination /> */}
      </div>
    </div>
  );
};

export default Category;
