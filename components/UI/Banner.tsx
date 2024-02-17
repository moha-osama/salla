import Image from "next/image";
import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="relative my-[3.5rem] ">
      <div className="absolute w-full top-[50%] translate-y-[-50%] z-10 px-4">
        <div className="flex gap-[2.5rem] flex-col-reverse md:flex-row items-center justify-center text-right">
          <div className="relative w-[21.9375rem] md:w-[43.5rem] h-[10.0625rem] md:h-[20rem]">
            <Image src="/assets/as8.png" fill alt="devices" />
          </div>
          <div className="max-w-[28rem] flex flex-col gap-4 md:items-end md:text-right text-center items-center">
            <h1 className="text-white font-dinbold font-bold leading-[4.375rem] text-4xl md:text-5xl">
              أفضل التخفيضات 2022
            </h1>
            <p className="text-[#dfdfdf] text-sm md:text-[1rem] leading-6 font-dinlight font-semibold">
              متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة
              إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات
              على المنتجات
            </p>
            <div className="flex justify-end pt-8">
              <Button
                title="اكتشف المزيد"
                className="bg-[#62D0B6] px-12 py-4 text-white text-[1rem] leading-6 font-dinmid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[39rem] md:h-[31.25rem]">
        <Image
          fill
          src="/footer.png"
          alt="banner"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Banner;
