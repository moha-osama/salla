import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../UI/Button";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

interface ProductCardProps {
  key: string;
  category: string;
  img: StaticImageData;
  title: string;
  description: string;
  price: number;
  sale: number | null;
}

const ProductCard = ({
  key,
  category,
  img,
  title,
  description,
  price,
  sale,
}: ProductCardProps) => {
  return (
    <div
      key={key}
      className="flex flex-col items-center border border-[#EEE] hover:border-[#62D0B6] duration-300 rounded-md hover:shadow-md"
    >
      <div className="relative w-full h-[14.25rem] ">
        <Image
          src={img}
          fill
          alt={title}
          style={{ objectFit: "cover" }}
          className="rounded-t-md"
          quality={100}
        />
      </div>
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
        <div className="flex justify-end gap-2">
          <div className="flex items-center text-[#A5A5A5] line-through leading-6 font-dinreg">
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
      <div className="flex gap-2 py-4">
        <Button
          afterIcon={<AiOutlineHeart />}
          className="border text-[#666] border-[#eee] text-[1rem] font-dinmid leading-6 font-medium items-center gap-4 py-3 px-3 rounded-md  hover:text-[#F55157]"
        />
        <Button
          title="أضف للسلة"
          afterIcon={<AiOutlineShoppingCart />}
          className="border border-[#EEE] text-[1rem] font-dinmid leading-6 font-medium items-center gap-4 py-3 px-6 rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductCard;
