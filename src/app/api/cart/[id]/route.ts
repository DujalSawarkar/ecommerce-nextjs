// pages/api/cart.js
import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/models/cartModel";

// Ensure the database is connected
connect();

// export async function POST(req: NextRequest, res: NextResponse) {
//   try {
//     const body = await req.json(); // Parse the request body
//     const { userId, item } = body;

//     // Find the cart for the user
//     let cart = await Cart.findOne({ userId });

//     if (!cart) {
//       // If no cart exists, create a new one
//       cart = new Cart({ userId, items: [item] });
//     } else {
//       // If cart exists, add the item to the cart
//       cart.items.push(item);
//     }

//     // Save the cart
//     await cart.save();

//     return NextResponse.json({
//       success: true,
//       data: cart,
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error adding item to cart:", error);
//     return NextResponse.json({
//       success: false,
//       message: "Internal Server Error",
//       status: 500,
//     });
//   }
// }

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
