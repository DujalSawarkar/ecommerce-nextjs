"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

const SignupPage = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const onSignup =  () => {
    try {
     console.log("hhh");
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Signup Form </h1>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="write an email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <label htmlFor="username">Username</label>
      <input
        id="username"
        placeholder="write a username"
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        placeholder="write a password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button onClick={onSignup}>Sign up</button>

      <Link href="/login">
        Login
      </Link>
    </div>
  );
};

export default SignupPage;
