"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Section1 = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* MOBILE HEADER (xs only) */}
      <div className="lg:hidden flex justify-between items-center md:px-[30px] xs:px-[10px] py-[15px]">
        <p className="text-[20px] font-bold">Categories</p>
        <button title='Menu' onClick={() => setOpen(true)}>
          <Menu className="size-[28px]" />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed top-0 left-0 bg-black text-white px-[20px] py-[25px] w-fit h-fit z-50 rounded-md shadow-lg">
          
          {/* Sidebar header */}
          <div className="flex justify-between items-center mb-[15px]">
            <p className="text-[20px] font-semibold">Categories</p>

            {/* Close button */}
            <button title='close' onClick={closeSidebar}>
              <X className="size-[26px]" />
            </button>
          </div>

          {/* Sidebar links (same as desktop) */}
          <div className="flex flex-col gap-[10px]">
            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px] flex justify-between items-center">
                <span></span><Link href="">Women&apos;s Fashion</Link> <b>&gt;</b>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px] flex justify-between items-center">
                <span></span><Link href="">Men&apos;s Fashion</Link> <b>&gt;</b>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Electronics</Link>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Home & Lifestyle</Link>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Medicine</Link>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Sports & Outdoor</Link>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Baby&apos;s & Toys</Link>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Groceries & Pets</Link>
              </p>
            </button>

            <button onClick={closeSidebar}>
              <p className="bg-white text-black p-[7px] rounded-[5px] w-[200px]">
                <Link href="">Health & Beauty</Link>
              </p>
            </button>
          </div>
        </div>
      )}

      {/* MAIN SECTION (desktop + mobile image layout) */}
      <div className="2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] sm:px-[10px] py-[20px] flex lg:flex-row justify-between items-center xl:items-start xs:flex-col xs:gap-[20px] ">

        {/* Desktop Sidebar */}
        <div className="border-r-[1px] border-gray-400 px-[10px] py-[20px] hidden lg:block">
          <p className="flex justify-between items-center gap-[10px] hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300 sm:w-[160px]">
            <Link href="">Women&apos;s Fashion</Link> <b>&gt;</b>
          </p>

          <p className="flex justify-between items-center gap-[10px] hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300 my-[10px] sm:w-[140px] lg:w-[160px]">
            <Link href="">Men&apos;s Fashion</Link> <b>&gt;</b>
          </p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300"><Link href="">Electronics</Link></p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300 my-[10px]"><Link href="">Home & Lifestyle</Link></p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300"><Link href="">Medicine</Link></p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300 my-[10px]"><Link href="">Sports & Outdoor</Link></p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300"><Link href="">Baby&apos;s & Toys</Link></p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300 my-[10px]"><Link href="">Groceries & Pets</Link></p>

          <p className="hover:bg-gray-200 rounded-[5px] p-[7px] bg-gray-300"><Link href="">Health & Beauty</Link></p>
        </div>

        {/* Right Image */}
        <div className="lg:w-[892px] lg:h-[344px] xl:w-[1000px] 2xl:w-[1240px]">
          <Image src="/hero-img.png" width={892} height={344} alt="Phone" className="xs:w-screen sm:w-screen md:w-screen lg:w-screen xl:w-screen 2xl:w-[1200px]" />
        </div>
      </div>
    </>
  );
};

export default Section1;
