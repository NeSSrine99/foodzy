import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="bg-bg flex flex-wrap items-center lg:justify-between justify-center  lg:px-[120px] md:px-[60px] px-5 py-16">
      <div className="max-w-[500px] ">
        <p className=" text-neutral-800 text-xl font-bold">
          <span className=" text-red-500  ">100%</span> Organic Vegetables
        </p>
        <h1 className="text-6xl font-black">
          The best way to stuff your wallet.
        </h1>
        <p className=" text-neutral-500 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis beatae consequuntur.
        </p>
        <div className=" flex items-center justify-between max-w-[400px] rounded-[50px]  pl-4 bg-white">
          <div className="flex items-center gap-2">
            <FiSend className="text-gray-500 cursor-pointer hover:text-primary transition-colors" />
            <input
              type="mail"
              placeholder="Your emaill address"
              className="text-zinc-500"
            />
          </div>
          <button className="bg-Secondary text-white py-4 px-4 rounded-[50px]">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/images/banner13.png"
          alt="banner"
          width={600}
          height={500}
          className=" max-w-[800px] "
        />
      </div>
    </div>
  );
};

export default Banner;
