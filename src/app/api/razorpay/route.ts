import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest, res: NextResponse) {
  //   console.log("hhhhhhhhhhhhhhhhhhhhhhhh", await req.json());
  const { amount, currency, receipt } = await req.json();
  const options = {
    amount: amount * 100, // Amount in paise
    currency,
    receipt,
  };

  try {
    console.log("Creating order with options:", options);
    const order = await razorpay.orders.create(options);
    console.log("Order created:", order);
    return NextResponse.json({
      data: order,
      status: 200,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({
      message: "order not created",
      status: 500,
    });
  }
}
