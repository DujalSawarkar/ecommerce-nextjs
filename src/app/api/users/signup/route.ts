import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  console.log("inside req");

  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { username, email, password } = reqBody;

    const userdata = await User.findOne({ email });
    if (userdata) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const SavedUser = await newUser.save();
    return NextResponse.json({
      message: "User created",
      success: true,
      SavedUser,
    });
  } catch (error) {
    console.log(error);
  }
}
