import React from "react";
import { newest } from "@/constants";
import Image from "next/image";

const Newest = () => {
  return (
    <ul className="grid grid-cols-3 gap-6 maxWidth">
      {newest.map((item, index) => (
        <li
          className={`flex flex-col gap-4 items-center text-center  rounded-md px-[3.5rem] py-[1.5rem] ${
            index === 0
              ? "bg-[#E0F6F0]"
              : index === 1
              ? "bg-[#FFEFDA]"
              : "bg-[#FDDCDD]"
          }`}
        >
          <div className="relative w-[12rem] h-[16rem]">
            <Image
              fill
              src={item.img}
              alt={item.title}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="max-w-[17rem]">
              <h1 className="text-[#333] text-xl font-dinbold font-bold leading-normal">
                {item.title}
              </h1>
              <p className="text-[#666] text-sm font-dinlight font-semibold">
                {item.features}
              </p>
            </div>

            <div>
              <button
                className={`text-[#333] font-dinmid text-xl leading-6 font-[500] py-4`}
              >
                تسوق الآن
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Newest;
