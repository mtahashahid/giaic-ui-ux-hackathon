import React from "react";
import Image from "next/image";
import fashion from "../../../public/banner2.png";

const Banner1 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Left Section */}
      {/* Right Section */}
      <div className="w-full sm:w-1/2">
        <Image
          src={fashion}
          alt="Leafs"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-full sm:w-1/2 p-8">
        {/* Navigation */}

        {/* Content */}
        <div className="p-24">
          <p className="text-secondaryText text-lg font-bold">Summer 2020</p>
          <h1 className="text-4xl sm:text-5xl font-bold my-8">
            Part of the Neural universe
          </h1>
          <p className="text-xl text-secondaryText font-semibold mb-8">
            We know how large objects will act, <br />but things on a small scale.
          </p>
          <div>
            <button className="bg-green-500 text-white text-lg font-medium px-8 py-3 rounded shadow hover:bg-green-600">
              Buy Now
            </button>
            <button className="bg-white outline outline-1 outline-green-500 text-green-500 text-lg font-medium px-8 py-3 rounded shadow hover:bg-green-600 hover:text-white ml-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
