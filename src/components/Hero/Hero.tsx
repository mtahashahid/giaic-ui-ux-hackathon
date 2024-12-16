import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/heroImage.jpeg')`,
      }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-48">
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 rounded-lg">
          <p className="text-sm uppercase tracking-wide font-semibold">Summer 2020</p>
          <h1 className="text-4xl md:text-6xl font-bold py-12">New Collection</h1>
          <p className="text-lg font-semibold">
          We know how large objects will act,<br /> 
          but things on a small scale.
          </p>
          <button className="mt-6 px-12 py-4 bg-green-500 text-white font-semibold text-xl rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
