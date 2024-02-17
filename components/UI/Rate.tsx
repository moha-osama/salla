import React from "react";
import { BsFillStarFill } from "react-icons/bs";

interface RateProps {
  count: number;
  highlighted: number;
}

const Rate = ({ count, highlighted }: RateProps) => {
  return (
    <ul className="flex items-center gap-1">
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>
          <BsFillStarFill
            className={
              index < highlighted ? "text-[#D6D6D6]" : "text-yellow-500"
            }
          />
        </div>
      ))}
    </ul>
  );
};

export default Rate;
