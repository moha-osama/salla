"use client";

import React, { useState } from "react";
import Button from "../UI/Button";
import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FooterInput = () => {
  const [value, setValue] = useState<string>("");
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="relative flex items-center">
      {value.trim().length === 0 && (
        <label className="absolute right-8 top-[50%] translate-y-[-60%] text-[#A5A5A5] text-lg font-dinlight font-medium">
          ادخل البريد الالكترونى
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
      <div>
        <Button
          title="إشتراك"
          className="bg-[#62D0B6] px-4 p-2 text-white font-dinmid rounded-md"
        />
      </div>
    </div>
  );
};

export default FooterInput;
