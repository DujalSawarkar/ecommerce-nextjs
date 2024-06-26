"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const Router = useRouter();
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setloading] = React.useState(false);
  const [buttonDisable, setbuttonDisable] = React.useState(false);
  useEffect(() => {
    if (
      formData.email.length > 0 &&
      formData.password.length > 0 &&
      formData.username.length > 0
    ) {
      setbuttonDisable(false);
    } else {
      setbuttonDisable(true);
    }
  }, [formData]);
  const onSignup = async () => {
    try {
      setloading(true);
      console.log(formData);

      const response = await axios.post("/api/users/signup", formData);

      console.log("response", response.data);
      Router.push("/login");
      setloading(false);
    } catch (error) {
      console.log(" sign up error", error);
    }
  };

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
            <h1 className="mb-6 text-2xl font-bold text-center text-black">
              Signup Form
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
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                placeholder="Write a username"
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
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

            <button
              onClick={onSignup}
              className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {buttonDisable ? "Can't Sign up" : "Sign up "}
            </button>

            <div className="text-center">
              <Link
                href="/login"
                className="text-sm text-blue-500 hover:underline"
              >
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPage;
