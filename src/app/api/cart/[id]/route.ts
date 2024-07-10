// pages/api/cart.js
import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/models/cartModel";

// Ensure the database is connected
connect();

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const { itemId } = body;
   
    console.log("Received userId and itemId:", id, itemId);

    if (!id || !itemId) {
      return NextResponse.json({
        success: false,
        message: "User ID or Item ID missing",
        status: 400,
      });
    }

    // Ensure the request is authenticated
    // const { userId: authenticatedUserId } = auth();
    // if (!authenticatedUserId || authenticatedUserId !== userId) {
    //   return NextResponse.json({
    //     success: false,
    //     message: "Unauthorized",
    //     status: 401,
    //   });
    // }

    // Find the cart for the user
    let cart = await Cart.findOne({ userId :id});
    if (!cart) {
      return NextResponse.json({
        success: false,
        message: "Cart not found",
        status: 404,
      });
    }

    // Remove the item from the cart
    cart.items = cart.items.filter(
      (item: any) => item._id.toString() !== itemId
    );

    // Save the updated cart
    await cart.save();

    return NextResponse.json({
      success: true,
      message: "Item deleted successfully",
      data: cart,
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
      status: 500,
    });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id);

  try {
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "User ID is required",
        status: 400,
      });
    }

    const cart = await Cart.findOne({ userId: id });

    if (!cart) {
      return NextResponse.json({
        success: false,
        message: "Cart not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      data: cart,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
      status: 500,
    });
  }
}
