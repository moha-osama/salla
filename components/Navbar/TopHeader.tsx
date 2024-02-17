import React from "react";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import NavLinks from "./NavLinks";

const TopHeader = () => {
  return (
    <div className="flex w-full items-center h-[2.5rem] bg-[#e9e9e9]">
      <div className="flex justify-center maxWidth">
        <ul className="hidden md:flex gap-[1rem] w-full  h-full items-center divide-x-2 divide-[#D6D6D6]">
          <NavLinks />
        </ul>
        <div className="flex divide-x-2 divide-[#D6D6D6] gap-2">
          <div className="flex items-end gap-2">
            <p className="text-[#666] text-md font-dinlight font-semibold">
              Support@salla.sa
            </p>
            <span className="text-[#62D0B6] text-xl">
              <AiOutlineMail />
            </span>
          </div>
          <div className="flex items-end gap-2 pl-2">
            <p className="text-[#666] text-md font-dinlight font-semibold">
              +966556754472
            </p>
            <span className="text-[#62D0B6] text-xl">
              <AiOutlinePhone />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
