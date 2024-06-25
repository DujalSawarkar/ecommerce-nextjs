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
      <div className="flex justify-around items-center bg-black text-white h-52 rounded-3xl absolute bottom-80 mx-20">
        <div className="w-1/2 text-4xl font-extrabold leading-[45px] text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-4 w-[27rem] h-12 rounded-full text-black text-base font-normal leading-6"
          />
          <button className="w-[27rem] h-12 rounded-full text-base font-medium leading-6 bg-white text-black hover:cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-evenly w-full h-2/5 pt-40 pb-4 bg-gray-100 gap-8">
          <div className="w-1/5">
            <Image
              src="/imgs/SHOP.CO.png"
              alt="Your Logo"
              width={100}
              height={50}
            />
            <br />
            <br />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <br />
            <div className="flex gap-4">
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
        <div className="bg-gray-100 p-4 flex justify-between relative">
          <div className="text-sm font-normal leading-5 text-right text-gray-600">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex items-center">
            <div>
              <Image
                src={visa}
                alt="Visa"
                width={50}
                height={30}
                className="hover:cursor-pointer"
              />
            </div>
            <div>
              <Image
                src={ApplePay}
                alt="Apple Pay"
                width={50}
                height={30}
                className="hover:cursor-pointer"
              />
            </div>
            <div>
              <Image
                src={Gpay}
                alt="Google Pay"
                width={50}
                height={30}
                className="hover:cursor-pointer"
              />
            </div>
            <div>
              <Image
                src={Badge}
                alt="Badge"
                width={50}
                height={30}
                className="hover:cursor-pointer"
              />
            </div>
            <div>
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
    </div>
  );
};

export default Footer;
