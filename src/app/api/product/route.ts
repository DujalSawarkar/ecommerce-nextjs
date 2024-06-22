import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productModel";

// Ensure the database is connected
connect();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await Product.find();
    return NextResponse.json({
      data,
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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json(); // Parse the request body
    const product = new Product(body);
    console.log(product);

    await product.save();
    return NextResponse.json({ product, status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
