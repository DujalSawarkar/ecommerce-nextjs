"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const LoginPage = () => {
  const Router = useRouter();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = React.useState(false);
  const [buttonDisable, setbuttonDisable] = React.useState(false);

  const onLogin = async () => {
    try {
      // console.log(formData);

      setloading(true);
      const response = await axios.post("/api/users/login", formData);
      // console.log("login", response);
      const token: string = response.data.token;
      Cookies.set("token", token);
      // Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      setbuttonDisable(false);
    } else {
      setbuttonDisable(true);
    }
  }, [formData]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full h-[60vh] max-w-md p-8 bg-gray-100 shadow-md rounded-md ">
        <h1 className="mb-6 text-2xl font-bold text-center text-black">
          Login Form
        </h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            placeholder="Write an email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="Write a password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          onClick={onLogin}
          className="w-full px-4 py-2 mb-4 text-white  rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {buttonDisable ? "Can't log in" : "Log in "}
        </Button>

        <div className="text-center">
          <Link
            href="/signup"
            className="text-sm text-blue-500 hover:underline"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
