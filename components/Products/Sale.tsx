import React from "react";
import SaleProductCard from "./SaleProductCard";
import { productsInSale } from "@/constants";

const Sale = () => {
  return (
    <div className="maxWidth grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
      {productsInSale.map((item) => (
        <SaleProductCard
          key={item.title}
          category={item.category}
          title={item.title}
          description={item.description}
          img={item.img}
          price={item.price}
          sale={item.sale}
          rate={item.rate}
          endDate={item.endDate}
        />
      ))}
    </div>
  );
};

export default Sale;
