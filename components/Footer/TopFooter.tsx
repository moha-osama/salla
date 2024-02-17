import React, { useState } from "react";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import FooterInput from "./FooterInput";

const TopFooter = () => {
  return (
    <div className="bg-[#e0e0e0] py-8 flex items-center justify-center mt-8">
      <div className="flex items-center justify-between gap-[1.5rem]  w-[90rem]">
        <div className="flex-1 text-right flex flex-col">
          <div>
            <h1 className="text-[#333] text-[1rem] font-dinmid font-medium">
              تطبيقات الجوال
            </h1>
          </div>
          <div className="flex items-center justify-end">
            <div>
              <Image
                src="/google-play.png"
                width={160}
                height={128}
                quality={100}
                alt="google play"
              />
            </div>
            <div>
              <Image
                src="/apple-store.png"
                width={130}
                height={128}
                quality={100}
                alt="google play"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 text-right flex flex-col">
          <div className=" pb-4">
            <h1 className="text-[#333] text-[1rem] font-dinmid font-medium">
              يمكنك إلغاء الاشتراك في أي لحظة
            </h1>
          </div>
          <div className="bg-white rounded-md">
            <FooterInput />
          </div>
        </div>
        <div className="flex-1 text-right">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-[#333] text-xl font-dinmid font-medium">
                يمكنك إلغاء الاشتراك في أي لحظة
              </h1>
              <p className="text-[#665] text-md font-dinlight font-semibold">
                انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!
              </p>
            </div>
            <div className="bg-[#D6F8F080] text-[#62D0B6] p-6 text-2xl rounded-full flex items-center justify-center">
              <FiMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
