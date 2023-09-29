import Image from "next/image";
import React from "react";
import FooterNav from "./footerNav";
import logoFooter from "@/public/assets/logo_footer.svg";
const footerList = [
  {
    title: "Menu",
    list: ["Home", "Converter", "How it Works"],
  },
  {
    title: "About us",
    list: ["About", "Contact Us", "Privacy Policy"],
  },
  {
    title: "Screen Record",
    list: ["Browser Window", "Desktop", "Application"],
  },
];
const Footer = () => {
  return (
    <footer className="lg:py-[98px] lg:px-[130px] px-20 py-10 bg-darkBlue flex flex-col lg:flex-row items-center justify-between lg:items-start gap-14 ">
      <div>
        <Image src={logoFooter} alt="Footer Logo" />
      </div>
      <div className="basis-2/3 flex flex-col lg:flex-row items-center lg:items-stretch gap-10 text-center justify-between lg:text-start">
        {footerList.map((lists) => (
          <FooterNav key={lists} {...lists} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
