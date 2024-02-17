import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/constants";

const Products = () => {
  return (
    <div className="maxWidth grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-x-4 gap-y-2">
      {products.map((item) => (
        <ProductCard
          key={item.title}
          category={item.category}
          title={item.title}
          description={item.description}
          img={item.img}
          price={item.price}
          sale={item.sale}
        />
      ))}
    </div>
  );
};

export default Products;
