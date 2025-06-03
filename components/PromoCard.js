"use client";

import React from "react";
import Image from "next/image";

export default function PromoCard({ image, title, buttonText, onClick }) {
  return (
    <div className="relative w-[400px] md:w-[400px] rounded-lg  shadow-md flex  items-center ">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={600}
        height={600}
        className="w-full h-auto object-cover"
      />

      {/* Content Below Image */}
      <div className="absolute left-6 top-10 p-6  flex flex-col items-start gap-4 w-[250px] ">
        <h3 className="text-zinc-800 text-xl font-bold text-left">{title}</h3>
        <button
          className="bg-Primary text-white py-2 px-4 rounded font-medium hover:bg-opacity-90 transition"
          onClick={onClick}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
