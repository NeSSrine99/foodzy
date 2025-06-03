import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  id,
  image = "/images/product1.png",
  name = "Fresh organic villa farm lomon 500gm pack",
  price = "28.85",
}) => {
  return (
    <div
      className="max-w-[250px] flex flex-col gap-4 border border-gray-100 rounded-xl shadow-md 
      transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105"
    >
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          width={199}
          height={246}
          className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-zinc-800 text-base font-medium">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-Secondary">${price}</p>
          <Link href={`/produits/${id}`}>
            <button
              className="bg-Primary text-sm font-bold text-white py-2 px-4 rounded 
            transition-all duration-300 hover:bg-opacity-90 hover:shadow-md"
            >
              Détails
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
