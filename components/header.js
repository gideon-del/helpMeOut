import { inter, sora, workSans } from "@/utils/font";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="max-w-[1240px] mx-auto  text-base flex justify-between items-center">
        <div
          className={`${inter.variable} text-primary-600 font-inter font-bold text-base flex items-center gap-2`}
        >
          <Image src={logo} alt="Logo" />
        </div>
        <nav>
          <ul
            className={`${workSans.variable} [&>*]:cursor-pointer font-workSans flex items-center gap-10 font-medium py-6 my-[10px]`}
          >
            <li>Features</li>
            <li>How It Works</li>
          </ul>
        </nav>
        <button
          className={`${sora.variable} font-saro text-primary-500 font-semibold`}
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
