"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Cards from "./Card/Cards";

// const data = {
//   _id: "123",
//   item_type: "product",
//   rate: 4,
//   imageUrl: "/path/to/image.jpg",
//   title: "Sample Product",
//   discount: 50,
//   price: 100,
//   discountPercent: 50,
// };
const Hero = (props: any) => {
  // const [Data, setData] = useState([]);
  // setData(data);
  const Data = props.data;
  const head1 = "NEW ARRIVALS";
  const head2 = "TOP SELLINGS";

  return (
    <div className="flex flex-col items-center">
      {/* {console.log(Data)} */}
      <div className="relative w-full">
        <div className="relative h-[90vh] mb-[-7px]">
          <div className="h-[90vh]">
            <Image
              src="/imgs/Rectangle2.png"
              alt="Main Image"
              layout="fill"
              className="object-cover"
            />
            <div className="absolute top-[15%] left-[5%] h-full w-[45%]">
              <div className="text-5xl font-extrabold leading-[50px]">
                FIND CLOTHES THAT MATCH YOUR STYLE
              </div>
              <p className="text-lg font-normal leading-[22px] text-gray-600 my-6">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="w-40 h-14 rounded-[62px] bg-black text-white text-xl font-medium leading-[22px] mb-12 transition duration-300">
                Shop Now
              </button>
              <div className="flex gap-8">
                <div>
                  <h1 className="text-4xl font-semibold">200+</h1>
                  <p className="text-gray-600 text-base leading-[30px]">
                    International Brands
                  </p>
                </div>
                <hr className="h-8 border-l border-black" />
                <div>
                  <h1 className="text-4xl font-semibold">2,000+</h1>
                  <p className="text-gray-600 text-base leading-[30px]">
                    High-Quality Products
                  </p>
                </div>
                <hr className="h-8 border-l border-black" />
                <div>
                  <h1 className="text-4xl font-semibold">30,000+</h1>
                  <p className="text-gray-600 text-base leading-[30px]">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-20 top-[10%] left-[90%]">
            <Image src="/imgs/Vector.png" alt="Star" layout="fill" />
          </div>
          <div className="absolute w-16 top-[43%] left-[52%]">
            <Image src="/imgs/Vector.png" alt="Star" layout="fill" />
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-24 flex justify-around items-center">
        <Image src="/imgs/Group.png" alt="Group" width={100} height={50} />
        <Image src="/imgs/Zara.png" alt="Zara" width={100} height={50} />
        <Image src="/imgs/gucci.png" alt="Gucci" width={100} height={50} />
        <Image src="/imgs/prada.png" alt="Prada" width={100} height={50} />
        <Image src="/imgs/Calvin.png" alt="Calvin" width={100} height={50} />
      </div>
      {Data == null ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      ) : (
        <Cards head={head1} key={2} data={Data} />
      )}
      <hr className="w-4/5 mx-auto my-8" />
      {Data == null ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      ) : (
        <Cards head={head2} key={2} data={Data} />
        // <h1>cards</h1>
      )}
      <div className="flex flex-col items-center bg-gray-200 border border-black w-4/5 mx-auto rounded-[50px] p-6 my-8">
        <p className="text-4xl font-extrabold mb-12">BROWSE BY DRESS STYLE</p>
        <div className="flex flex-wrap gap-8 justify-center items-center mb-16">
          <div>
            <div className="relative transition-transform transform hover:scale-105">
              <Link href="/category/casuals">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Casual
                </h1>
                <Image
                  src="/imgs/Cloth-img/image11.png"
                  alt="Casual"
                  width={480}
                  height={300}
                  className="rounded-[30px]"
                />
              </Link>
            </div>
            <div className="relative transition-transform transform hover:scale-105">
              <Link href="/category/formals">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Formal
                </h1>
                <Image
                  src="/imgs/Cloth-img/image13.png"
                  alt="Formal"
                  width={480}
                  height={300}
                  className="rounded-[30px]"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="relative transition-transform transform hover:scale-105">
              <Link href="/category/party">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Party
                </h1>
                <Image
                  src="/imgs/Cloth-img/image12.png"
                  alt="Party"
                  width={480}
                  height={300}
                  className="rounded-[30px]"
                />
              </Link>
            </div>
            <div className="relative transition-transform transform hover:scale-105">
              <Link href="/category/gym">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Gym
                </h1>
                <Image
                  src="/imgs/Cloth-img/image14.png"
                  alt="Gym"
                  width={480}
                  height={300}
                  className="rounded-[30px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-4xl font-extrabold leading-tight p-12">
        OUR HAPPY CUSTOMERS
      </div>
      <div className="flex justify-center items-center">
        {/* <SwiperCard />
         */}

        <h1>Swipecards</h1>
      </div>
    </div>
  );
};

export default Hero;
