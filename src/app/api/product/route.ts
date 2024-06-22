import { connect } from "@/dbconfig/dbConfig";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await Product.find();
    return NextResponse.json({
      data,
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const product = new Product(req.body);
    console.log(product);

    await product.save();
    return NextResponse.json({ product, status: 201 });
  } catch (error) {
    console.log("herre isss arararara", error);
  }
}
