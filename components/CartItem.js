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
    <div>
      {cartItems?.length === 0 ? (
        <div className="p-4 text-gray-500 text-center bg-[#F7F7F8]">
          Aucun article dans votre panier.
        </div>
      ) : (
        <ul className="space-y-4 bg-[#F7F7F8] p-6">
          <div className="flex items-center justify-between text-neutral-700 text-base font-semibold capitalize mb-10">
            <p className="w-[190px]">Product</p>
            <p className="w-[70px]">Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>

          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-gray-400 pb-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover p-1"
                />
                <h3 className="text-neutral-700 text-sm w-[130px]">
                  {item.name}
                </h3>
              </div>

              <p className="text-neutral-600">${item.price}</p>

              <div className="mx-2 flex items-center gap-4 border px-2 py-1 rounded border-gray-300 bg-white">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="text-[14px] font-semibold">
                  {item.quantity || 1}
                </span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <p className="text-neutral-600">{getItemSubtotal(item.id)}$</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <BsTrash3 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between mt-2">
        <Link href="/produits">
          <button className="border-b text-Text">Continue Shopping</button>
        </Link>
        <button className="border py-2 px-4 bg-Primary text-white rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Section1PageCart;
