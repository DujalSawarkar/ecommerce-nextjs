"use client";

import Image from "next/image";
import Link from "next/link";
import rectangle2 from "@/app/imgs/Rectangle2.png";
import vector from "@/app/imgs/Vector.png";
import group from "@/app/imgs/Group.png";
import zara from "@/app/imgs/Zara.png";
import gucci from "@/app/imgs/gucci.png";
import prada from "@/app/imgs/prada.png";
import calvin from "@/app/imgs/Calvin.png";
import image11 from "@/app/imgs/Cloth-img/image11.png";
import image12 from "@/app/imgs/Cloth-img/image12.png";
import image13 from "@/app/imgs/Cloth-img/image13.png";
import image14 from "@/app/imgs/Cloth-img/image14.png";
import Cards from "./Card/Cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Comment from "./Comments";
// import { UserButton } from "@clerk/nextjs";

const Hero = (props: any) => {
  const Data = props.data;
  const head1 = "NEW ARRIVALS";
  const head2 = "TOP SELLINGS";
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

  return (
    <div className="flex flex-col items-center">
      {/* <UserButton /> */}
      <div className="relative w-full">
        <div className="relative h-[90vh] mb-[-7px]">
          <div className="relative h-[90vh]">
            <Image
              src={rectangle2}
              alt="Main Image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute top-[15%] left-[5%] h-full w-[90%] md:w-[60%]">
              <div className="text-4xl md:text-5xl font-extrabold leading-tight md:leading-[50px]">
                FIND CLOTHES THAT MATCH YOUR STYLE
              </div>
              <p className="text-lg font-normal leading-[22px] text-gray-600 my-6">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="w-32 md:w-40 h-12 md:h-14 rounded-[62px] bg-black text-white text-xl font-medium leading-[22px] mb-12 transition duration-300">
                Shop Now
              </button>
              <div className="flex gap-4 md:gap-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-semibold">200+</h1>
                  <p className="text-gray-600 text-base leading-[30px]">
                    International Brands
                  </p>
                </div>
                <hr className="h-8 border-l border-black" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-semibold">2,000+</h1>
                  <p className="text-gray-600 text-base leading-[30px]">
                    High-Quality Products
                  </p>
                </div>
                <hr className="h-8 border-l border-black" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-semibold">
                    30,000+
                  </h1>
                  <p className="text-gray-600 text-base leading-[30px]">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[10%] right-[10%] w-20 h-20 md:w-24 md:h-24">
            <Image src={vector} alt="Star" layout="fill" objectFit="contain" />
          </div>
          <div className="absolute top-[43%] left-[52%] w-16 h-16 md:w-20 md:h-20">
            <Image src={vector} alt="Star" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-16 md:h-24 flex justify-around items-center">
        <Image src={group} alt="Group" width={100} height={50} />
        <Image src={zara} alt="Zara" width={100} height={50} />
        <Image src={gucci} alt="Gucci" width={100} height={50} />
        <Image src={prada} alt="Prada" width={100} height={50} />
        <Image src={calvin} alt="Calvin" width={100} height={50} />
      </div>
      {Data == null ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      ) : (
        <Cards head={head1} key={1} data={Data} />
      )}
      <hr className="w-4/5 mx-auto my-8" />
      {Data == null ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      ) : (
        <Cards head={head2} key={2} data={Data} />
      )}
      <div className="flex flex-col items-center bg-gray-200 border border-black w-4/5 mx-auto rounded-[50px] p-6 my-8">
        <p className="text-4xl font-extrabold mb-12">BROWSE BY DRESS STYLE</p>
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center mb-16">
          <div className="">
            <div className="relative transition-transform transform hover:scale-105">
              <Link href="/category/casuals">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Casual
                </h1>
                <Image
                  src={image11}
                  alt="Casual"
                  width={480}
                  height={100}
                  className="rounded-[30px] h-80"
                />
              </Link>
            </div>
            <div className="relative transition-transform transform hover:scale-105 mt-8">
              <Link href="/category/formals">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Formal
                </h1>
                <Image
                  src={image13}
                  alt="Formal"
                  width={480}
                  height={300}
                  className="rounded-[30px]"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="relative transition-transform transform hover:scale-105 mb-8">
              <Link href="/category/party">
                <h1 className="absolute top-4 left-4 text-2xl font-bold">
                  Party
                </h1>
                <Image
                  src={image12}
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
                  src={image14}
                  alt="Gym"
                  width={480}
                  height={300}
                  className="rounded-[30px] h-80"
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
        <Carousel className="w-[100vw] max-w-7xl">
          <CarouselContent className="-ml-1">
            {Data2.map((e: any, index) => (
              <CarouselItem key={index}>
                <Comment data={e} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
