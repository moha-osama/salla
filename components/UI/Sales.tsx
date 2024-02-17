import React from "react";
import Image from "next/image";
import { previewData } from "@/typing";
import { sales, preview } from "@/constants";

interface SalesProps {
  className: string;
}

const Sales = ({ className }: SalesProps) => {
  return (
    <div className="flex items-center justify-center px-8">
      <ul
        className={`grid  ${
          sales.length <= 2
            ? "gridc-cols md:grid-cols-2 gap-y-4"
            : "grid-cols-1 md:grid-cols-3 grid-rows-2 md:[&>*:last-child]:col-span-3"
        } ${className}`}
      >
        {sales.map((item) => (
          <li className="relative" key={Math.random()}>
            <div
              className={`absolute ${
                sales.length <= 2 ? "left-[5%]" : "right-[3%]"
              } top-[50%] translate-y-[-50%] z-10 text-right`}
            >
              <h3
                className={`${
                  sales.length <= 2
                    ? "text-[#666] text-[1rem]"
                    : "text-[#EEE] text-[1rem]"
                } font-dinlight font-semibold leading-6`}
              >
                {item.title}
              </h3>
              <h1
                className={`${
                  sales.length <= 2
                    ? "text-[#333] text-4xl"
                    : "text-white text-2xl"
                } font-dinmid leading-[3.125rem] font-[500]`}
              >
                {item.description}
              </h1>
              <button
                className={`${
                  sales.length <= 2 ? "text-[#333]" : "text-white"
                } font-dinmid text-xl leading-6 font-[500] py-4`}
              >
                تسوق الآن
              </button>
            </div>
            <div
              className={`relative shadow-md max-w-[544px] max-h-[544px] overflow-hidden`}
            >
              {/* <div className="bg-black w-full h-full absolute z-10 opacity-30" /> */}
              <Image
                src={item.img}
                alt={item.title}
                width={544}
                height={544}
                quality={100}
                style={{ objectFit: "contain" }}
                className="rounded-md"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
