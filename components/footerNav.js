import { sora, workSans } from "@/utils/font";
import React from "react";

const FooterNav = ({ title, list }) => {
  return (
    <div className={`flex flex-col gap-[26px]`}>
      <h4
        className={`${sora.variable} font-saro text-base text-white font-semibold`}
      >
        {title}
      </h4>
      <ul
        className={`${workSans.variable} font-workSans text-base font-normal text-white flex flex-col gap-[26px]`}
      >
        {list.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
