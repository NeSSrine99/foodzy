"use client";

import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col gap-20 lg:px-[120px] md:px-[60px] px-5 py-20">
      <h1 className="text-slate-700 text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default page;
