"use client";
import React, { useEffect, useState } from "react";
import Hero from "./(components)/Hero";
import axios from "axios";

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
  // console.log(Productdata);

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
