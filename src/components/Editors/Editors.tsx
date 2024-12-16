import React from "react";
import women from "../../../public/women.jpeg";
import men from "../../../public/menn.jpeg";
import Accessories from '../../../public/accessories.png'
import Kid from '../../../public/kid.png'
import Image from "next/image";

const Editors = () => {
  return (
    <div className="bg-white py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold tracking-wide text-black">
          EDITOR'S PICK
        </h2>
        <p className="text-secondaryText">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="container mx-auto px-4 ">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* MEN */}
        <div className="relative group md:col-span-1">
          <Image
            src={men}
            alt="Men"
            width={400}
            height={500}
            className="object-cover w-full h-[500px]"
          />
          <div className="absolute bottom-4 left-4">
            <button className="bg-white text-black px-12 py-2 font-semibold uppercase">
              Men
            </button>
          </div>
        </div>

        {/* WOMEN */}
        <div className="relative group md:col-span-1">
          <Image
            src={women}
            alt="Women"
            width={200}
            height={200}
            className="object-cover w-full h-[500px]"
          />
          <div className="absolute bottom-4 left-4">
            <button className="bg-white text-black px-12 py-2 font-semibold uppercase">
              Women
            </button>
          </div>
        </div>

        {/* ACCESSORIES & KIDS */}
        <div className="flex flex-col gap-6">
          {/* Accessories */}
          <div className="relative group">
            <Image
              src={Accessories}
              alt="Accessories"
              width={400}
              height={240}
              className="object-cover w-full h-[240px]"
            />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-black px-6 py-2 font-semibold uppercase">
                Accessories
              </button>
            </div>
          </div>

          {/* Kids */}
          <div className="relative group">
            <Image
              src={Kid}
              alt="Kids"
              width={400}
              height={240}
              className="object-cover w-full h-[240px]"
            />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-black px-6 py-2 font-semibold uppercase">
                Kids
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Editors;