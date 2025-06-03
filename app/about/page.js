import React from "react";

export const metadata = {
  title: "About Foodzy- Online Grocery Store",
  description:
    "Learn more about Foodzy – your go-to online store for fresh vegetables, fruits, and daily groceries delivered to your door.",
};

const page = () => {
  return (
    <div className="flex flex-col items-start gap-8 max-w-[700px] lg:px-[120px] md:px-[60px] px-5 py-[100px] ">
      <h1 className=" text-neutral-800 text-4xl font-bold fon">About Us</h1>
      <div className="text-neutral-500 text-sm flex flex-col items-start gap-6">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          recusandae necessitatibus quasi incidunt alias adipisci pariatur earum
          iure beatae assumenda rerum quod. Tempora magni autem a voluptatibus
          neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
          rerum cum accusamus magni consequuntur architecto, ipsum deleniti
          expedita doloribus suscipit voluptatum eius perferendis amet!.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          maxime amet architecto est exercitationem optio ea maiores corporis
          beatae, dolores doloribus libero nesciunt qui illum? Voluptates
          deserunt adipisci voluptatem magni sunt sed blanditiis quod
          aspernatur! Iusto?
        </p>
      </div>
    </div>
  );
};

export default page;
