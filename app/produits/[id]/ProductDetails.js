// ProductDetails.js

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { use } from "react"; // Required to unwrap params
import { useCart } from "@/context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

export default function ProductDetails({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, cart } = useCart();

  const cartItemCount = cart?.length
    ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  useEffect(() => {
    if (!id) {
      setError("Product ID is not available");
      setLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to load product");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast.success("✅ Product added to cart!", {
      duration: 2000,
      position: "top-right",
      iconTheme: {
        primary: "#10B981",
        secondary: "#fff",
      },
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading details...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64 text-Primary">
        <p>Error: {error}</p>
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        <p>Product not found</p>
      </div>
    );

  return (
    <>
      {/* ✅ Toast Provider */}
      <Toaster />

      <section className="flex flex-wrap justify-center gap-10 p-6 relative">
        {/* Left side - image */}
        <div className="flex items-center justify-center shadow rounded-lg overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right side - product info */}
        <div className="flex flex-col gap-4 p-4 max-w-md">
          <h3 className="text-zinc-800 text-base font-medium">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-Secondary">${product.price}</p>

            <button
              className="bg-Primary text-sm font-bold text-white py-2 px-4 rounded 
              transition-all duration-300 hover:bg-opacity-90 hover:shadow-md flex items-center gap-2"
              onClick={handleAddToCart}
            >
              <MdOutlineShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          {/* Counter Badge */}
          <div className="absolute top-4 right-4 bg-Primary text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md z-10">
            🛒 {cartItemCount}
          </div>
        </div>
      </section>
    </>
  );
}
