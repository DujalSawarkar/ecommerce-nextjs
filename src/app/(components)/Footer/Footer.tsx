// components/Footer.js
import React from "react";
import Image from "next/image";
import FooterCard from "./FooterCard";
import { IoLogoTwitter } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import visa from "@/app/imgs/PaymentImg/visa.png";
import ApplePay from "@/app/imgs/PaymentImg/Applepay.png";
import Gpay from "@/app/imgs/PaymentImg/GPay.png";
import Badge from "@/app/imgs/PaymentImg/Badge.png";
import Paypal from "@/app/imgs/PaymentImg/Paypal.png";
import shopco from "@/app/imgs/SHOP.CO.png";

const Footer = () => {
  const FooterData = [
    {
      id: "1",
      title: "COMPANY",
      about: "about",
      feature: "feature",
      work: "work",
      career: "career",
    },
    {
      id: "2",
      title: "Help",
      about: "Customer Support",
      feature: "Delivery Details",
      work: " Terms & Conditions",
      career: " Privacy Policy",
    },
    {
      id: "3",
      title: "FAQ",
      about: "Account",
      feature: "Manage Deliveries",
      work: "Orders",
      career: "Payments",
    },
    {
      id: "4",
      title: "RESOURCES",
      about: "Free eBooks",
      feature: "Development Tutorial",
      work: "How to - Blog",
      career: "Youtube Playlist",
    },
  ];

  return (
    <div className="mt-60 relative">
      <div className="lg:flex flex-col md:flex-row justify-around items-center bg-black text-white h-52 rounded-3xl absolute bottom-80 mx-4 md:mx-20 p-4 md:p-0 -top-100">
        <div className="w-full lg:w-1/2 text-2xl md:text-4xl font-extrabold leading-[30px] md:leading-[45px] text-center md:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="flex flex-col items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-2 md:p-4 w-full md:w-[27rem] h-10 md:h-12 rounded-full text-black text-base font-normal leading-6"
          />
          <button className="w-full md:w-[27rem] h-10 md:h-12 rounded-full text-base font-medium leading-6 bg-white text-black hover:cursor-pointer ">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-evenly w-full h-auto pt-20 md:pt-40 pb-4 bg-gray-100 gap-8">
          <div className="w-full md:w-1/5 text-center md:text-left">
            <Image src={shopco} alt="Your Logo" width={100} height={50} />
            <br />
            <br />
            <p>
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <br />
            <div className="flex justify-center md:justify-start gap-4">
              <div className="border border-black w-11 h-11 flex justify-center items-center rounded-full overflow-hidden">
                <IoLogoTwitter />
              </div>
              <div className="border border-black w-11 h-11 flex justify-center items-center rounded-full overflow-hidden">
                <LuFacebook />
              </div>
              <div className="border border-black w-11 h-11 flex justify-center items-center rounded-full overflow-hidden">
                <RiInstagramLine />
              </div>
              <div className="border border-black w-11 h-11 flex justify-center items-center rounded-full overflow-hidden">
                <FaGithub />
              </div>
            </div>
          </div>

          {FooterData.map((e) => (
            <FooterCard key={e.id} FooterData={e} />
          ))}
        </div>

        <hr />
        <div className="bg-gray-100 p-4 flex flex-col md:flex-row justify-between items-center relative">
          <div className="text-sm font-normal leading-5 text-center md:text-right text-gray-600 mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex gap-4 justify-center">
            <Image
              src={visa}
              alt="Visa"
              width={50}
              height={30}
              className="hover:cursor-pointer"
            />
            <Image
              src={ApplePay}
              alt="Apple Pay"
              width={50}
              height={30}
              className="hover:cursor-pointer"
            />
            <Image
              src={Gpay}
              alt="Google Pay"
              width={50}
              height={30}
              className="hover:cursor-pointer"
            />
            <Image
              src={Badge}
              alt="Badge"
              width={50}
              height={30}
              className="hover:cursor-pointer"
            />
            <Image
              src={Paypal}
              alt="Paypal"
              width={50}
              height={30}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
