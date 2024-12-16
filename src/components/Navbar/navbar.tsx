"use client";
import { useState } from "react";
import Link from "next/link";
import Heart from "../../../public/heart.svg";
import Cart from "../../../public/cart.svg";
import Search from "../../../public/search.svg";
import arrowDown from '../../../public/arrowDown.svg'
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fff] text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-24">
        <Link href="/" className="text-2xl font-bold">
          Bandage
        </Link>
        <ul
          className={`md:flex space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link href="/" className="text-secondaryText font-semibold hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="flex flex-row">
            <Link href="/contact" className="text-secondaryText font-semibold hover:text-gray-400">
              Shop
            </Link>
            <Image src={arrowDown} alt="arrowDown" className="ml-2" width={20}/>
          </li>
          <li>
            <Link href="/about" className="text-secondaryText font-semibold hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-secondaryText font-semibold hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-secondaryText font-semibold hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-secondaryText font-semibold hover:text-gray-400">
              Pages
            </Link>
          </li>
        </ul>
        </div>
        
        <div className="flex justify-between space-x-6">
          {/* <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pr-10 pl-4 py-2 border-transparent rounded-md w-full focus:outline-none bg-[#f5f5f5]"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Image src={Search} alt="Search" width={24} />
            </div>
          </div> */}
          <div className="text-[#23A6F0] font-semibold">
            login / Register
          </div>
          <Image src={Search} alt="Search" width={22} />
          <Image src={Heart} alt="heart" />
          <Image src={Cart} alt="Cart" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#23A6F0]">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
