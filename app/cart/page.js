import Section1PageCart from "@/components/CartItem";
import React from "react";

export const metadata = {
  title: "Shopping Cart | Foodzy",
  description:
    "View and review the products you added to your shopping cart. Easily complete your purchase.",
  robots: "index, follow",
};

const page = () => {
  return (
    <div className="py-[100px] lg:px-[120px] md:px-[60px] px-[16px]">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <Section1PageCart />
    </div>
  );
};

export default page;
