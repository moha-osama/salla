import React from "react";
import TopFooter from "./TopFooter";
import { footerLinks } from "@/constants";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { socialMedia } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <TopFooter />
      <div className="flex py-20  max-w-[90rem] mx-auto">
        <div className="flex justify-end flex-[0.5]">
          <div className="flex flex-col max-w-[20rem] text-right">
            <h1 className="text-[#333] text-xl font-dinmid font-medium leading-6 pb-2">
              تابعنا على
            </h1>
            <div className="flex items-center justify-end gap-4">
              {socialMedia.map((item) => (
                <div className="">
                  <Image
                    src={item.img}
                    alt=""
                    width={35}
                    height={40}
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <nav className="grid grid-cols-3">
            {footerLinks.map((item) => (
              <ul className="flex flex-col gap-2 text-right">
                <p className="text-[#333] text-xl font-dinmid font-medium leading-6 pb-2">
                  {item.title}
                </p>
                {item.links.map((item) => (
                  <li className="list-none text-md font-dinlight font-semibold text-[#666]">
                    {item.title}
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
        <div className="flex-[1] flex justify-end">
          <div className="flex flex-col max-w-[20rem] text-right">
            <h1 className="text-[#333] text-xl font-dinmid font-medium leading-6 pb-2">
              عن متجرنا
            </h1>
            <p className="list-none text-md font-dinlight font-semibold text-[#666]">
              متجر سلة من افضل المتاجر التى تقوم ببيع المنتجات الرقمية بأفضل
              الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم
              واستمتع بأفضل العروض والخصومات
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1F1F] min-h-[3rem] flex justify-end px-4 items-center">
        <p className="text-white text-sm font-dinlight font-semibold">
          الحقوق محفوظة لمنصة سلة © 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
