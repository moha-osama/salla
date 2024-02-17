import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "../UI/Button";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

interface SaleProductCardProps {
  key: string;
  category: string;
  img: StaticImageData;
  title: string;
  description: string;
  price: number;
  sale: number | null;
  rate: number;
  endDate: string;
}

const SaleProductCard = ({
  key,
  category,
  img,
  title,
  description,
  price,
  sale,
  rate,
  endDate,
}: SaleProductCardProps) => {
  return (
    <div
      key={key}
      className="flex flex-row-reverse gap-6 items-center border border-[#EEE] hover:border-[#62D0B6] duration-300 rounded-md"
    >
      <div className="relative w-[12.25rem] h-[18rem]">
        <Image
          src={img}
          fill
          alt={title}
          style={{ objectFit: "cover" }}
          className="rounded-t-md py-8"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-end flex-auto">
        <div className="flex flex-col gap-2 max-w-[18rem] text-right">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#62D0B6] text-sm font-dinlight font-semibold ">
              {category}
            </h3>
            <h1 className="text-[#333] text-lg font-dinmid font-medium">
              {title}
            </h1>
            <p className="text-[#666] text-sm font-dinlight font-semibold ">
              {description}
            </p>
          </div>
          <div>rate</div>
          <div className="flex justify-end gap-2">
            <div className="flex items-center text-[#A5A5A5] line-through leading-6 font-dinlight font-semibold">
              <span>ر.س</span>
              <p>{price}</p>
            </div>
            <div className="flex items-center gap-1 text-[#F55157] text-xl leading-6 font-dinmid font-medium">
              <span>ر.س</span>
              <p>
                {sale
                  ? (price - (price * sale) / 100).toFixed(2)
                  : price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div>Date</div>
        <div className="flex gap-2 py-4">
          <Button
            afterIcon={<AiOutlineHeart />}
            className="border text-[#666] border-[#eee] text-[1rem] font-dinmid leading-6 font-medium items-center gap-4 py-3 px-3 rounded-md  hover:text-[#F55157]"
          />
          <Button
            title="أضف للسلة"
            afterIcon={<AiOutlineShoppingCart />}
            className="border text-white bg-[#62D0B6] border-[#EEE] text-[1rem] font-dinmid leading-6 font-medium items-center gap-4 py-3 px-24 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;
