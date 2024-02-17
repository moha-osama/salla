"use client";

import React from "react";
import { MdLanguage } from "react-icons/md";

const ChangeLang = () => {
  return (
    <div className="cursor-pointer flex text-md text-[#666] items-end gap-2 pl-[1rem]">
      <p className="font-dinlight font-semibold">العربية - رس</p>
      <span className="text-lg">
        <MdLanguage />
      </span>
    </div>
  );
};

export default ChangeLang;
