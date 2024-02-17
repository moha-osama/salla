import React from "react";
import Image from "next/image";
import { categories } from "@/constants";

const Categories = () => {
  return (
    <ul className="flex items-center justify-between maxWidth my-4">
      {categories.map((item) => (
        <li className="flex flex-col gap-2">
          <div className="relative h-[8.4375rem] w-[8.4375rem]">
            <Image
              src={item.img}
              fill
              alt={item.label}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#333] text-xl leading-7 font-dinlight font-semibold">
              {item.label}
            </h1>
            <div className="flex gap-1 items-center text-[#666] text-[1rem] leading-6 font-dinlight font-semibold">
              <span>منتج</span>
              <p>{item.quantity}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
