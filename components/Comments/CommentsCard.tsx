"use client";

import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Rate from "../UI/Rate";

interface CommentsCardProps {
  by: string;
  comment: string;
  rate: number;
  profession: string;
}

const CommentsCard = ({ by, comment, rate, profession }: CommentsCardProps) => {
  return (
    <div className="border border-[#EEE] text-right p-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span>
            <ImQuotesLeft className="text-[#EEEEEE] text-3xl" />
          </span>
          <Rate count={5} highlighted={rate} />
        </div>
        <div>
          <p className="text-[#666] text-[1rem] font-dinlight font-semibold leading-6">
            {comment}
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <div>
            <h1 className="text-xl text-[#333] font-dinmid leading-6">{by}</h1>
            <h3 className="text-[#666] text-sm font-dinlight font-semibold leading-6">
              {profession}
            </h3>
          </div>
          <div className="relative w-12 h-12">
            <Image
              src="/user.jpeg"
              fill
              alt="user"
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
