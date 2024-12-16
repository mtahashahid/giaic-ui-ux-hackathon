import React from "react";
import Image from "next/image";
import model from '../../../public/col-md-6.png';

const Banner = () => {
  return (
    <div className="relative h-[600px] bg-[#23856d] flex items-center px-36">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-16 h-full">
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 space-y-6">
          <p className="text-md uppercase tracking-wide font-bold">Summer 2020</p>
          <h1 className="text-4xl md:text-5xl py-4 lg:text-6xl font-bold leading-tight">
            Vita Classic <br /> Product
          </h1>
          <p className="text-lg font-semibold">
          We know how large objects will act, We know <br />how are objects will act, We know
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-lg font-bold">$16.48</p>
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
              Add to cart
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-end h-full">
          <Image
            src={model}
            alt="model"
            width={400}
            height={400}
            className="max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
