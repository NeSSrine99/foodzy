"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

//  Yup Validation Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postCode: yup
    .string()
    .required("Post Code is required")
    .matches(/^\d{5}$/, "Post Code must be 5 digits"),
  country: yup.string().required("Country is required"),
  regionState: yup.string().required("Region/State is required"),
});

export default function SignUpPage() {
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
    <div className="flex items-center justify-center min-h-[80vh] py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* First Name & Last Name */}
        <div className="mb-4 flex gap-4">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter Your First Name"
              {...register("firstName")}
              className={`shadow appearance-none border ${
                errors.firstName ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Your Last Name"
              {...register("lastName")}
              className={`shadow appearance-none border ${
                errors.lastName ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone Number */}
        <div className="mb-4 flex gap-4">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              {...register("email")}
              className={`shadow appearance-none border ${
                errors.email ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number*
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber")}
              className={`shadow appearance-none border ${
                errors.phoneNumber ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address*
          </label>
          <textarea
            id="address"
            placeholder="Enter Your Address"
            rows={3}
            {...register("address")}
            className={`shadow appearance-none border ${
              errors.address ? "border-red-500" : "border-blue-500"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none`}
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City & Post Code */}
        <div className="mb-4 flex gap-4">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City*
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter Your City"
              {...register("city")}
              className={`shadow appearance-none border ${
                errors.city ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.city && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postCode"
            >
              Post Code*
            </label>
            <input
              type="text"
              id="postCode"
              placeholder="Enter Your Post Code"
              {...register("postCode")}
              className={`shadow appearance-none border ${
                errors.postCode ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.postCode && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.postCode.message}
              </p>
            )}
          </div>
        </div>

        {/* Country & Region/State */}
        <div className="mb-4 flex gap-4">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Country*
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter Your Country"
              {...register("country")}
              className={`shadow appearance-none border ${
                errors.country ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.country && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="regionState"
            >
              Region/State*
            </label>
            <input
              type="text"
              id="regionState"
              placeholder="Enter Your Region/State"
              {...register("regionState")}
              className={`shadow appearance-none border ${
                errors.regionState ? "border-red-500" : "border-blue-500"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.regionState && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.regionState.message}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <Link
            href="/login"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}
