import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="bg-bg flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:px-[120px] md:px-[60px] px-5 py-16">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-neutral-800 text-xl font-bold mb-2">
          <span className="text-red-500">100%</span> Organic Vegetables
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          The best way to stuff your wallet.
        </h1>
        <p className="text-neutral-500 text-base font-normal mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis beatae consequuntur.
        </p>

        {/* Email Subscribe Section */}
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-md max-w-md mx-auto lg:mx-0">
          <div className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto">
            <FiSend className="text-gray-500" />
            <input
              type="email"
              placeholder="Your email address"
              className="outline-none w-full sm:w-auto text-zinc-700 placeholder-zinc-400"
            />
          </div>
          <button className="bg-Secondary text-white py-3 px-6 rounded-full w-full sm:w-auto mt-2 sm:mt-0 sm:mr-2">
            Subscribe
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[600px]">
        <Image
          src="/images/banner13.png"
          alt="banner"
          width={600}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
