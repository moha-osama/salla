"use client";

import React, { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Searchbar = () => {
  const [value, setValue] = useState<string>("");
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative max-w-[40rem] h-[3rem] ">
      {value.trim().length === 0 && (
        <label className="absolute right-8 top-[50%] translate-y-[-60%] text-[#A5A5A5] text-lg font-dinlight font-medium">
          ابحث عما تريد
        </label>
      )}
      <input
        value={value}
        onChange={inputChangeHandler}
        className="
      absolute 
      w-full 
      h-full 
      bg-transparent 
      border 
      border-[#A5A5A5] 
      rounded-md 
      focus:outline-none 
      text-right
      px-[1.8rem]
      "
      />
      <span className="absolute left-4 top-[50%] translate-y-[-60%] text-xl text-[#A5A5A5]">
        {value.trim().length === 0 ? (
          <RxMagnifyingGlass />
        ) : (
          <AiOutlineCloseCircle
            className="cursor-pointer"
            onClick={() => setValue("")}
          />
        )}
      </span>
    </div>
  );
};

export default Searchbar;
