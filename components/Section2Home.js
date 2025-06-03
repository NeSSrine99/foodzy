import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";

const Section2Home = () => {
  return (
    <div className="bg-[url('/images/footer.png')] py-10 px-5 flex flex-wrap lg:justify-between justify-center rounded-3xl lg:mx-[120px] md:mx-[60px] mx-5 my-20">
      <section className="max-w-[400px] flex flex-col items-start gap-4">
        <h1 className="text-slate-700 text-4xl font-bold">
          Stay home & get your daily needs from our shop
        </h1>
        <p className=" text-zinc-500 text-lg ">
          Start You'r Daily Shopping with
          <span className="text-Secondary"> Nest Mart</span>
        </p>
        <div className=" flex items-center justify-around max-w-[400px] rounded-[50px]  pl-4 bg-white">
          <div className="flex items-center gap-2">
            <FiSend className="text-gray-500 cursor-pointer hover:text-primary transition-colors" />
            <input
              type="mail"
              placeholder="Your emaill address"
              className="text-zinc-500"
            />
          </div>
          <button className="bg-Primary text-white py-4 px-4 rounded-[50px]">
            Subscribe
          </button>
        </div>
      </section>
      <section>
        <Image
          src="/images/banner9.png"
          alt="benner9"
          width={600}
          height={300}
          className=""
        />
      </section>
    </div>
  );
};

export default Section2Home;
