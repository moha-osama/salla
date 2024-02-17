import Image from "next/image";
import React from "react";
import { BsPlay } from "react-icons/bs";

const VideoBanner = () => {
  return (
    <div className="relative my-[3.5rem]">
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  z-10">
        <div className=" rounded-full flex items-center justify-center border border-white p-4">
          <div className="bg-[#62D0B6] rounded-full flex items-center justify-center w-[4.375rem] h-[4.375rem]">
            <BsPlay className="text-white text-4xl" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[31.5rem]">
        <Image
          src="/banner.png"
          fill
          alt="banner"
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default VideoBanner;
