"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProductId = () => {
  const { id } = useParams();
  return <div>ProductId {id}</div>;
};

export default ProductId;
