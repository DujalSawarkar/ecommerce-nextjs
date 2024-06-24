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

  if (!id) {
    return NextResponse.json({
      message: "Bad Request: Missing ID parameter",
      status: 400,
    });
  }

  try {
    const product = await Product.findById(id);
    console.log(product);
    if (!product) {
      return NextResponse.json({
        message: "Item not found",
        status: 404,
      });
    }
    return NextResponse.json({
      data: product,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
