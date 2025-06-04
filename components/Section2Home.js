import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";

const Section2Home = () => {
  return (
    <div className="bg-[url('/images/footer.png')] py-10 px-5 flex flex-col lg:flex-row flex-wrap lg:justify-between justify-center rounded-3xl lg:mx-[120px] md:mx-[60px] mx-5 my-20 gap-10">
      {/* Text Section */}
      <section className="w-full lg:max-w-[45%] flex flex-col items-start gap-4">
        <h1 className="text-slate-700 text-3xl sm:text-4xl font-bold leading-snug">
          Stay home & get your daily needs from our shop
        </h1>
        <p className="text-zinc-500 text-base sm:text-lg">
          Start You'r Daily Shopping with
          <span className="text-Secondary font-semibold"> Nest Mart</span>
        </p>
        <div className="w-full flex items-center justify-between rounded-full pl-4 bg-white overflow-hidden">
          <div className="flex items-center gap-2 flex-grow">
            <FiSend className="text-gray-500 cursor-pointer hover:text-primary transition-colors" />
            <input
              type="email"
              placeholder="Your email address"
              className="text-zinc-500 w-full py-3 px-2 focus:outline-none"
            />
          </div>
          <button className="bg-Primary text-white py-3 px-6 rounded-full whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full lg:w-auto flex justify-center">
        <Image
          src="/images/banner9.png"
          alt="banner9"
          width={600}
          height={300}
          className="w-full max-w-[600px] h-auto"
        />
      </section>
    </div>
  );
};

export default Section2Home;
