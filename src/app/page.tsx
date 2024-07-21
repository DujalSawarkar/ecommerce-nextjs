"use client";
import React, { useEffect, useState } from "react";
import Hero from "./(components)/Hero";
import axios from "axios";
import Script from "next/script";

const Home = () => {
  const [Productdata, setProductdata] = useState([]);
  const FetchProductData = async () => {
    try {
      const res = await axios.get("api/product");
      const resdata = await res.data.data;
      setProductdata(resdata);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    FetchProductData();
  }, []);

  return (
    <>
    <Script
    id="razorpay-checkout-js"
    src="https://checkout.razorpay.com/v1/checkout.js"
   />
      <Hero data={Productdata} />
    </>
  );
};

export default Home;
