// src/app/api/cart/route.ts
import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/models/cartModel";

// Ensure the database is connected
connect();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json(); // Parse the request body
    const { userId, item } = body;
    console.log("Received userId and item:", userId, item);

    // Find the cart for the user
    let cart = await Cart.findOne({ userId });
    console.log("Existing cart:", cart);

    if (cart == null) {
      // If no cart exists, create a new one
      cart = new Cart({ userId, items: [item] });
      console.log("Created new cart:", cart);
    } else {
      // If cart exists, add the item to the cart
      cart.items.push(item);
      console.log("Added item to existing cart:", cart.items);
    }

    // Save the cart
    await cart.save();

    return NextResponse.json({
      success: true,
      data: cart,
      status: 200,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
      status: 500,
    });
  }
}
