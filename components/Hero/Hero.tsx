import React from "react";
import Image from "next/image";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute w-full z-10 top-[50%] translate-y-[-60%]">
        <div className="flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-4 items-center text-center px-8">
            <h1 className="text-3xl sm:text-5xl font-dinbold text-white leading-normal font-[700]">
              أفضل التخفيضات 2023
            </h1>
            <p className="text-sm sm:text-[1rem] leading-[1.5625rem] font-normal font-dinlight text-white">
              متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة
              إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات
              على المنتجات
            </p>
          </div>
          <Button
            title="اكتشف المزيد"
            className="bg-[#62D0B6] px-8 py-4 leading-6  text-white rounded-lg font-dinmid text-[1rem] font-medium "
          />
        </div>
      </div>
      <div className="relative w-full h-[35rem]">
        <Image
          src="/hero.png"
          fill
          alt="hero backround"
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
