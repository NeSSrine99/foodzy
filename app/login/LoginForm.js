"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

//  Yup Validation Schema
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] py-[100px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 border border-gray-200 p-6 rounded-md shadow-sm max-w-[450px] w-full bg-white"
      >
        <h2 className="text-xl font-bold text-center text-neutral-800">
          Login
        </h2>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
            className="text-neutral-500 text-sm py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            {...register("password")}
            className="text-neutral-500 text-sm py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 accent-Primary"
            />
            <label htmlFor="remember" className="text-neutral-500 text-sm">
              Remember Me
            </label>
          </div>
          <p className="text-neutral-500 text-sm cursor-pointer hover:text-primary transition-colors">
            Forgot Password?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-around pt-2">
          <button
            type="submit"
            className="bg-Primary text-white py-2 px-6 rounded transition-transform duration-300 hover:bg-opacity-90 hover:scale-105"
          >
            Login
          </button>
          <Link href="/sign-up">
            <button
              type="button"
              className="text-neutral-500 hover:text-primary transition-colors"
            >
              SignUp
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
