"use client";
import React, { useEffect, useState } from "react";
import Hero from "./(components)/Hero";
import axios from "axios";

const Home = () => {
  const [Productdata, setProductdata] = useState({});
  const FetchProductData = async () => {
    try {
      const res = await axios.get("api/product");
      setProductdata(res.data.data);
      console.log(res.data.data);
      // console.log(await Productdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProductData();
  }, []);

  return (
    <>
      <Hero data={Productdata} />
    </>
  );
};

export default Home;
