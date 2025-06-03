"use client";

import React from "react";
import PromoCard from "./PromoCard";

export default function Section1Home() {
  const promoItems = [
    {
      image: "/images/banner3.png",
      title: "The best Organic Products Online",

      link: "/products",
    },
    {
      image: "/images/banner1.png",
      title: "Make your Breakfast Healthy and Easy",

      link: "/vegetables",
    },
    {
      image: "/images/banner1.png",
      title: "Everyday Fresh &Clean with Our Products",

      link: "/fruits",
    },
  ];

  return (
    <section className="py-[100px] lg:px-[120px] md:px-[60px] px-5 ">
      <div className="flex flex-wrap gap-6 justify-center items-start">
        {promoItems.map((item, index) => (
          <PromoCard
            key={index}
            image={item.image}
            title={item.title}
            buttonText={item.btnText}
            onClick={() => (window.location.href = item.link)}
          />
        ))}
      </div>
    </section>
  );
}
