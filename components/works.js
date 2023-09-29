import Image from "next/image";

import worksPlaceholder from "@/public/assets/works_placeholder.png";
import { inter, workSans } from "@/utils/font";

const Works = ({ img, title, desc }) => {
  return (
    <article className="flex-col flex justify-center items-center">
      <Image src={img} alt="How it wors" className="mb-8" />
      <h3
        className={`${inter.variable} font-inter font-semibold text-center mb-4 text-[28px] text-[#1B233D]`}
      >
        {title}
      </h3>
      <p
        className={`${workSans.variable} font-workSans max-w-[358px] mb-7 text-center leading-primary font-normal text-xl`}
      >
        {desc}
      </p>
      <Image src={worksPlaceholder} alt="Placeholder" />
    </article>
  );
};

export default Works;
