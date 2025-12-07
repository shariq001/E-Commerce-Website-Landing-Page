"use client";

import React, { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* DESKTOP HEADER (lg and up) */}
      <div className="hidden lg:flex justify-between items-center 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] sm:px-[10px] pb-[15px] pt-[30px] text-black border-b-[1px] border-gray-400">
        
        {/* Logo */}
        <div>
          <p className="font-bold text-[24px]">Exclusive</p>
        </div>

        {/* Nav */}
        <nav className={`flex justify-center items-center gap-[48px] ${poppins.className}`}>
          <p className="hover:underline"><Link href="">Home</Link></p>
          <p className="hover:underline"><Link href="">Contact</Link></p>
          <p className="hover:underline"><Link href="">About</Link></p>
          <p className="hover:underline"><Link href="">Sign Up</Link></p>
        </nav>

        {/* Search + icons */}
        <div className="flex justify-end items-center gap-[24px]">
          <div className="bg-[#F5F5F5] w-[243px] h-[38px] flex justify-center items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-none outline-none p-[5px]"
            />
            <button title="Search">
              <Search className="size-[20px]" />
            </button>
          </div>

          <button title="like"><Heart /></button>
          <button title="cart"><ShoppingCart /></button>
        </div>
      </div>

      {/* MOBILE HEADER (<lg) */}
      <div className="lg:hidden flex justify-between items-center 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] py-[20px] border-b border-gray-300">
        
        {/* Logo */}
        <p className="font-bold text-[24px]">Exclusive</p>

        {/* Bars Icon */}
        <button title="Bar" onClick={() => setOpen(true)}>
          <Menu className="size-[28px]" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-0 right-0 w-fit h-fit bg-black text-white 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] sm:px-[10px] py-[30px] z-50">
          
          {/* Header of mobile menu */}
          <div className="flex justify-between items-center mb-[20px] px-[20px]">
            <p className="font-bold text-[24px]">Exclusive</p>

            {/* Close Button */}
            <button title="Bar" onClick={closeMenu}>
              <X className="size-[28px]" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-[15px] text-[18px] px-[20px]">
            <Link href="" onClick={closeMenu} className="hover:underline">Home</Link>
            <Link href="" onClick={closeMenu} className="hover:underline">Contact</Link>
            <Link href="" onClick={closeMenu} className="hover:underline">About</Link>
            <Link href="" onClick={closeMenu} className="hover:underline">Sign Up</Link>
          </nav>

          {/* Search + icons */}
          <div className="mt-[25px] flex flex-col gap-[15px] px-[20px]">
            <div className="bg-[#333] w-[200px] h-[38px] flex items-center px-[10px] rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white outline-none w-full"
              />
              <Search className="size-[20px]" />
            </div>

            <div className="flex gap-[20px]">
              <Heart />
              <ShoppingCart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
