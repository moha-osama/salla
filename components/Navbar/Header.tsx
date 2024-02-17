"use client";

import React from "react";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Searchbar from "./Searchbar";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex items-center justify-center transition-transform duration-300 sm:sticky top-0 z-20 bg-white py-4 shadow-md">
      <div className="flex flex-col gap-4 w-full max-w-[80rem] mx-auto px-[40px]">
        <div className="flex gap-2 md:gap-[3rem] items-center justify-around w-full">
          {/*Header Left Side*/}
          <div className="flex gap-2 sm:gap-8 items-center text-right">
            <div className="flex gap-1 md:gap-4 font-dinlight font-semibold text-[#A5A5A5]">
              <div className="flex flex-col whitespace-nowrap">
                <h1 className="text-sm md:text-lg">سلة المشتريات</h1>
                <div className="flex gap-1 items-center text-black text-[1rem]">
                  <span>رس</span>
                  <p>1,200</p>
                </div>
              </div>
              <div className="w-[2.5rem] md:w-14 h-[2.5rem] md:h-14 rounded-full flex justify-center items-center bg-black/[0.05] cursor-pointer relative">
                <BsCart2 className="text-[20px] text-black/[0.5]" />
                <div className="h-[18px] w-[18px] rounded-full bg-red-600 absolute top-1 md:top-3 left-7 text-white text-[12px] flex justify-center items-center px-[5px]">
                  5
                </div>
              </div>
            </div>
            <div className="flex gap-4 font-dinlight font-semibold text-[#A5A5A5]">
              <div className="hidden sm:flex flex-col">
                <h1 className="text-sm md:text-lg">مرحبا بك</h1>
                <div className="flex gap-1 items-center text-black text-[1rem]">
                  <p>تسجيل دخول</p>
                </div>
              </div>
              <div className="w-[2.5rem] md:w-14 h-[2.5rem] md:h-14 rounded-full flex justify-center items-center bg-black/[0.05] cursor-pointer relative">
                <AiOutlineUser className="text-[20px] text-black/[0.5]" />
              </div>
            </div>
          </div>
          {/*Header Mid 'search bar'*/}
          <div className="hidden md:block flex-1">
            <Searchbar />
          </div>
          {/*Header Logo'*/}
          <div className="flex items-center gap-2">
            <div className="relative w-[4rem] sm:w-[6.5rem] h-[2rem] sm:h-[3.25rem]">
              <Image src="/logo.png" fill alt="logo" />
            </div>
            <div className="block md:hidden">
              <AiOutlineMenu className="text-lg sm:text-2xl text-[#62D0B6]" />
            </div>
          </div>
        </div>
        <div className="w-full md:hidden">
          <Searchbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
