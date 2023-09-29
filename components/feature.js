import { inter, workSans } from "@/utils/font";
import Image from "next/image";
import React from "react";

const Feature = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col  lg:flex-row lg:items-start items-center gap-4 max-w-md mx-auto lg:max-w-none">
      <Image src={img} alt="Screem Recording" className="" />
      <div
        className={`${inter.variable} font-inter flex-col gap-2 text-center lg:text-start font-semibold text-[28px] text-[#1B233D]`}
      >
        <h3>{title}</h3>
        <p
          className={`${workSans.variable} font-workSans text-xl text-[#616163] font-normal leading-[151.3%]`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Feature;
