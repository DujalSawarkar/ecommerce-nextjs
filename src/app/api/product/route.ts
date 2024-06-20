import { connect } from "@/dbconfig/dbConfig";
import Product from "@/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

// const Data = [
//   {
//     id: "1",
//     category: "casuals",
//     rate: 4.0,
//     imageUrl: "/imgs/Cloth-img/image12.png",
//     title: "Casual Wear",
//     discount: 10,
//     price: 49.99,
//     discountPercent: 20,
//     colors: ["bg-red-500", "bg-blue-500", "bg-green-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 100
//   },
//   {
//     id: "2",
//     category: "party",
//     rate: 4.0,
//     imageUrl: "/imgs/Cloth-img/image14.png",
//     title: "Elegant Dress",
//     discount: 15,
//     price: 99.99,
//     discountPercent: 15,
//     colors: ["bg-pink-500", "bg-purple-500", "bg-indigo-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 80
//   },
//   {
//     id: "3",
//     category: "gym",
//     rate: 4.0,
//     imageUrl: "/imgs/Cloth-img/image11.png",
//     title: "Gym Wear",
//     discount: 5,
//     price: 29.99,
//     discountPercent: 10,
//     colors: ["bg-gray-500", "bg-black", "bg-blue-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 120
//   },
//   {
//     id: "4",
//     category: "casuals",
//     rate: 4.0,
//     imageUrl: "/imgs/Cloth-img/image13.png",
//     title: "Winter Casuals",
//     discount: 20,
//     price: 79.99,
//     discountPercent: 25,
//     colors: ["bg-brown-500", "bg-green-500", "bg-yellow-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 60
//   },
//   {
//     id: "5",
//     category: "formals",
//     rate: 4.0,
//     imageUrl: "/imgs/Cloth-img/image12.png",
//     title: "Formal Wear",
//     discount: 8,
//     price: 59.99,
//     discountPercent: 10,
//     colors: ["bg-gray-500", "bg-black", "bg-white"], // Tailwind CSS color classes
//     totalQuantityAvailable: 70
//   },
//   {
//     id: "6",
//     category: "party",
//     rate: 4.0,
//     imageUrl: "/imgs/Cloth-img/image11.png",
//     title: "Party Dress",
//     discount: 12,
//     price: 89.99,
//     discountPercent: 15,
//     colors: ["bg-purple-500", "bg-black", "bg-gold-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 90
//   },
//   {
//     id: "7",
//     category: "casuals",
//     rate: 4.5,
//     imageUrl: "/imgs/Cloth-img/image12.png",
//     title: "Casual Dress",
//     discount: 18,
//     price: 64.99,
//     discountPercent: 28,
//     colors: ["bg-red-500", "bg-blue-500", "bg-yellow-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 50
//   },
//   {
//     id: "8",
//     category: "party",
//     rate: 4.8,
//     imageUrl: "/imgs/Cloth-img/image13.png",
//     title: "Cocktail Dress",
//     discount: 22,
//     price: 114.99,
//     discountPercent: 20,
//     colors: ["bg-pink-500", "bg-purple-500", "bg-indigo-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 70
//   },
//   {
//     id: "9",
//     category: "gym",
//     rate: 4.2,
//     imageUrl: "/imgs/Cloth-img/image14.png",
//     title: "Workout Leggings",
//     discount: 7,
//     price: 34.99,
//     discountPercent: 17,
//     colors: ["bg-gray-500", "bg-black", "bg-blue-500"], // Tailwind CSS color classes
//     totalQuantityAvailable: 110
//   }
// ];

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
