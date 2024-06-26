import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productModel";

// Ensure the database is connected
connect();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id);

  if (!id) {
    return NextResponse.json({
      message: "Bad Request: Missing category parameter",
      status: 400,
    });
  }

  try {
    const products = await Product.find({
      $or: [{ category: id }, { item_type: id }],
    });
    if (!products || products.length === 0) {
      return NextResponse.json({
        message: "No products found for the given category",
        status: 404,
      });
    }
    console.log(products);
    return NextResponse.json({
      data: products,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
