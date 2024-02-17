import React from "react";
import { topHeaderLinks } from "@/constants";
import Link from "next/link";
import ChangeLang from "./ChangeLang";

const NavLinks = () => {
  return (
    <>
      {topHeaderLinks.map((item) => (
        <li className="text-[#666] font-dinlight font-semibold text-sm pl-[1rem]">
          <Link href="/">{item.label}</Link>
        </li>
      ))}
      <ChangeLang />
    </>
  );
};

export default NavLinks;
