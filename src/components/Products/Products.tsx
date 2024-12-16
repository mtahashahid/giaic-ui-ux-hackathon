import React from "react";
import Image from "next/image";
import product1 from "../../../public/featured.jpg";

const Products = () => {
  return (
    <div className="bg-white py-8 px-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-md uppercase font-semibold tracking-wide text-secondaryText">
          Featured Products
        </h2>
        <h3 className="text-2xl py-4 font-bold text-black">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-secondaryText">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        {[
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
          { image: product1, name: "Graphic Design", price: "$6.48", original: "$16.48" },
        ].map((product, index) => (
          <div key={index} className="border hover:shadow-lg transition duration-300 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-128 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-semibold text-black">{product.name}</h4>
              <p className="text-sm text-secondaryText py-2 font-semibold">English Department</p>
              <p className="mt-2 text-lg">
                <span className="line-through text-gray-400 mr-2 font-semibold">
                  {product.original}
                </span>
                <span className="text-green-600 font-bold">{product.price}</span>
              </p>
              {/* Color Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${color} cursor-pointer`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
