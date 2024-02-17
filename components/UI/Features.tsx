import React from "react";
import { features } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex items-center justify-center my-[3.5rem]">
      <ul className="flex flex-col md:flex-row  justify-center border border-[#ececec] py-8 px-6 md:divide-x-2 rounded-lg">
        {features.map((item) => (
          <li className="flex gap-4 sm:pr-4 sm:pl-4 py-8 md:py-0 border-b md:border-0 border-[#ececec] last:border-0">
            <div className="flex flex-col text-right">
              <h1 className="text-[#333] text-xl font-dinmid leading-7 font-[500]">
                {item.title}
              </h1>
              <p className="text-[#666] text-md leading-6 font-dinlight">
                {item.description}
              </p>
            </div>
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <Image src={item.img} fill alt={item.title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
