"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import { BsTrash3 } from "react-icons/bs";

const Section1PageCart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getItemSubtotal,
  } = useCart();

  const cartItems = cart;

  return (
    <div className="p-4 bg-[#F7F7F8] rounded-md">
      {cartItems?.length === 0 ? (
        <div className="text-gray-500 text-center py-10">
          Aucun article dans votre panier.
        </div>
      ) : (
        <div className="space-y-4">
          {/* Header */}
          <div className="hidden md:grid grid-cols-5 gap-4 text-neutral-700 text-base font-semibold capitalize mb-6">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>

          {/* Cart Items */}
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:grid md:grid-cols-5 items-center gap-4 border-b border-gray-300 pb-4 "
              >
                {/* Product */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded bg-white"
                  />
                  <h3 className="text-neutral-700 text-sm">{item.name}</h3>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  {/* Price */}
                  <p className="text-neutral-600">${item.price}</p>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 border px-3 py-1 rounded bg-white">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="text-[14px] font-semibold">
                      {item.quantity || 1}
                    </span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  {/* Total */}
                  <p className="text-neutral-600">
                    {getItemSubtotal(item.id)}$
                  </p>
                </div>
                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-600 sm:hidden"
                >
                  <BsTrash3 size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <Link href="/produits" className="w-full sm:w-auto">
          <button className="border-b text-Text hover:text-Primary w-full text-center">
            Continue Shopping
          </button>
        </Link>
        <button className="bg-Primary text-white py-2 px-6 rounded w-full sm:w-auto">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Section1PageCart;
