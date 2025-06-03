"use client";

import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="">
      <section className="flex flex-wrap justify-between items-center gap-8 lg:px-[120px] md:px-[60px] px-5 bg-neutral-100 py-[100px]">
        {/* Section 1: Logo + Info */}
        <section className="max-w-[360px] flex flex-col items-start gap-4 px-4">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={90}
                height={90}
                className="w-16 h-16"
              />
              <p className="flex flex-col">
                <span className="text-black font-bold">Foodzy</span>
                <span className="text-sm">A Treasure of Tastes</span>
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-Primary w-5 h-6" />
              <p className="text-sm text-Text">
                51 Green St. Huntington Ohio beach ontario, NY 11746 KY 4783,
                USA.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <RiMailSendLine className="text-Primary w-5 h-6" />
              <p className="text-sm text-gray-600">example@email.com</p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlinePhone className="text-Primary w-5 h-6" />
              <p className="text-sm text-gray-600">+91 123 4567890</p>
            </div>
          </div>
        </section>

        {/* Section 2: Links */}
        <section className="flex flex-wrap items-center gap-5">
          <div className="flex flex-col gap-4 min-w-[150px]">
            <h3 className="text-lg font-bold">Company</h3>
            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Contact Us</p>
              <p>Support Center</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-[150px]">
            <h3 className="text-lg font-bold">Category</h3>
            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <p>Dairy & Bakery</p>
              <p>Fruits & Vegetable</p>
              <p>Snack & Spice</p>
              <p>Juice & Drinks</p>
              <p>Chicken & Meat</p>
              <p>Fast Food</p>
            </div>
          </div>
        </section>

        {/* Section 3: Newsletter + Social Icons */}
        <section className="flex flex-col items-center gap-6">
          <h3 className="text-lg font-bold">Subscribe Our Newsletter</h3>
          <div className="flex items-center justify-between w-[270px] px-4 py-2 border rounded bg-white border-gray-200">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full outline-none text-sm"
            />
            <FiSend className="text-gray-500 cursor-pointer hover:text-primary transition-colors" />
          </div>

          <div className="flex items-center gap-4">
            <div
              className="bg-white p-2 rounded border border-gray-300 
            transition-all duration-300 ease-in-out 
            hover:scale-110 hover:text-blue-600 hover:shadow-md hover:border-primary"
            >
              <FaFacebookF />
            </div>
            <div
              className="bg-white p-2 rounded border border-gray-300 
            transition-all duration-300 ease-in-out 
            hover:scale-110 hover:text-pink-500 hover:shadow-md hover:border-primary"
            >
              <FaInstagram />
            </div>
            <div
              className="bg-white p-2 rounded border border-gray-300 
            transition-all duration-300 ease-in-out 
            hover:scale-110 hover:text-orange-500 hover:shadow-md hover:border-primary"
            >
              <IoBasketballOutline />
            </div>
            <div
              className="bg-white p-2 rounded border border-gray-300 
            transition-all duration-300 ease-in-out 
            hover:scale-110 hover:text-blue-400 hover:shadow-md hover:border-primary"
            >
              <FiTwitter />
            </div>
          </div>
        </section>
      </section>
      <p className="text-sm py-4 text-center border-t-1 lg:mx-[120px] md:mx-[60px] mx-5 border-Text">
        © 2025 <span className="text-Primary">foodzy</span>, All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
