import React from "react";
import Button from "../UI/Button";
import { SlArrowLeft } from "react-icons/sl";

interface LabelProps {
  title: string;
  description: string;
  buttonTxt: string;
}

const Label = ({ title, description, buttonTxt }: LabelProps) => {
  return (
    <div className="flex items-center text-right maxWidth mt-[3.5rem] mb-[1.75rem]">
      <div className="flex-1">
        <Button
          title={buttonTxt}
          className="border border-[#62D0B6] text-sm text-[#62D0B6] font-dinlight font-semibold px-4 py-2 gap-4 items-center rounded-md"
          beforeIcon={<SlArrowLeft />}
        />
      </div>
      <div className="">
        <h1 className="text-[#333] text-xl sm:text-2xl leading-8 font-dinmid ">
          {title}
        </h1>
        <p className="text-[#666] text-sm ssm:text-[1rem] font-dinlight font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Label;
