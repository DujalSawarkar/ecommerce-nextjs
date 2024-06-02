"use client";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";

// import "./category.css";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

import axios from "axios";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useParams, useSearchParams } from "next/navigation";
// import Card from "../../Card/Cards";

const Category = () => {
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
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large ",
    "3X-Large", // Combined into a single element
    "4X-Large",
  ];

  const dressStyle = ["casuals", "formals", "party", "gym"];

  //   let { param } = useParams();
  const { categoryId } = useParams();

  //   const [searchParam, setsearchParam] = useSearchParams();
  //   const item_type = searchParam.get("item_type");
  // console.log(item_type);

  //   const changeitem = (props) => {
  //     const type = props;
  //     setsearchParam({ item_type: type });
  //   };

  //   const getItemByCategory = async (categoryId, item_type) => {
  //     const URL = item_type
  //       ? `http://localhost:4000/items/find/${categoryId}?item_type=${item_type}`
  //       : `http://localhost:4000/items/find/${categoryId} `;

  //     const { data } = await axios.get(URL);

  //     console.log(data);
  //     setCatData(data);
  //   };

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     if (!dressStyle.includes(categoryId)) navigate("/"); //protection of routes
  //     getItemByCategory(categoryId, item_type);
  //   }, [item_type]);

  const [filterHide, setfilterHide] = useState(true);
  const [price, setprice] = useState(true);
  const [Color, setColor] = useState(true);
  const [Size, setSize] = useState(true);
  const [Style, setStyle] = useState(true);
  const changeHandler = (state: any, setstate: any) => {
    setstate((prev: any) => !prev);
  };

  return (
    <div>
      {/* <RouteCard category={categoryId} /> */}
      <div className="w-[95%] flex gap-[2rem] mx-auto categoryBody">
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
              onClick={() => changeHandler(filterHide, setfilterHide)}
            />
          </div>
          {filterHide && (
            <>
              <hr className="my-[1rem]" />
              <div className="filter-Div2">
                {cloths.map((e) => (
                  <div className="flex justify-between items-center my-[1rem]">
                    <h1 className="text-lg font-normal text-left text-gray-600">
                      {e}
                    </h1>
                    <IoIosArrowForward
                      className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                      //   onClick={() => {
                      //     changeitem(e);
                      //   }}
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
                    onClick={() => changeHandler(price, setprice)}
                  />
                </div>
                {/* {price && (
                  <Slider
                    className="Slider"
                    getAriaLabel={() => "Temperature range"}
                    // value={value}
                    // onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                  />
                )} */}
              </div>
              <hr className="my-[1rem]" />
              <div className="flex justify-between items-center w-[245px]">
                <h1 className="text-2xl font-bold text-left text-black">
                  Colors
                </h1>
                <IoIosArrowUp
                  className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full"
                  onClick={() => changeHandler(color, setColor)}
                />
              </div>

              {Color && (
                <div className="grid grid-cols-5 gap-[1rem] my-[1rem]">
                  {color.map((e) => {
                    return (
                      <div
                        className={`${e} w-[37px] h-[37px] border-2 border-gray-200 rounded-full`}
                      ></div>
                    );
                  })}
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
                    <button className="flex justify-center items-center py-[0.5rem] px-[0.2rem] rounded-full bg-gray-200 text-lg font-normal text-left text-gray-600 transition-colors duration-200 hover:bg-black hover:text-white">
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
                  <div className="flex justify-between items-center my-[1rem]">
                    <h1 className="text-lg font-normal text-left text-gray-600">
                      Casual
                    </h1>
                    <IoIosArrowForward className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full" />
                  </div>

                  <div className="flex justify-between items-center my-[1rem]">
                    <h1 className="text-lg font-normal text-left text-gray-600">
                      Formals
                    </h1>
                    <IoIosArrowForward className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full" />
                  </div>

                  <div className="flex justify-between items-center my-[1rem]">
                    <h1 className="text-lg font-normal text-left text-gray-600">
                      party
                    </h1>
                    <IoIosArrowForward className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full" />
                  </div>

                  <div className="flex justify-between items-center my-[1rem]">
                    <h1 className="text-lg font-normal text-left text-gray-600">
                      Gym
                    </h1>
                    <IoIosArrowForward className="transition-transform duration-200 hover:cursor-pointer hover:bg-gray-100 hover:rounded-full" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="category-main flex flex-col gap-[2rem]">
          <div className="w-[70vw] flex justify-between">
            <h1 className="text-[32px] font-bold text-left capitalize">
              {categoryId}
            </h1>
            <div className="flex items-center sortFilter">
              <p> Sort by : </p>
              <h5> Most Popular</h5>
              {<RiArrowDropDownLine />}
            </div>
          </div>
          <div className="category-card-div flex flex-wrap gap-[3rem] mx-auto">
            {catData.length == 0 ? (
              <center className="loader-main">
                {/* <div class="loader"></div> */}
              </center>
            ) : (
              <>
                {catData.map((item) => (
                  //   <Card key={item._id} data={item} />

                  <h1>hhhh</h1>
                ))}
              </>
            )}
          </div>
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
