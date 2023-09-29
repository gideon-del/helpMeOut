import { inter, workSans } from "@/utils/font";
import Image from "next/image";
import React from "react";

const Feature = ({ img, title, desc }) => {
  return (
    <div className="flex items-start gap-4">
      <Image src={img} alt="Screem Recording" className="" />
      <div
        className={`${inter.variable} font-inter flex-col gap-2 font-semibold text-[28px] text-[#1B233D]`}
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
