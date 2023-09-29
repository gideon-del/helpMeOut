import Footer from "@/components/footer";
import Header from "@/components/header";
import { manrope, sora, workSans } from "@/utils/font";
import edit from "@/public/assets/edit.svg";
import Image from "next/image";
import copy from "@/public/assets/copy.svg";
export default function VideoDetail() {
  return (
    <>
      <Header />
      <main className="flex-1 my-20">
        <section className="max-w-[1240px] mx-auto grid grid-cols-2">
          <div className={`${sora.variable} font-saro`}>
            <h1 className={` font-bold text-[45px] text-[#141414]`}>
              Your video is ready!
            </h1>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-[9px]">
                <span className="font-medium text-base text-[#727272]">
                  Name
                </span>
                <p className="text-primary-400 font-semibold text-2xl flex items-center gap-[9px]">
                  Untitled_Video_20232509{" "}
                  <button>
                    <Image src={edit} alt="Edit" />
                  </button>
                </p>
              </div>
              <div className="py-3 px-6 rounded-2xl border-[0.5px] border-primary-50 bg-grey_100 max-w-[502px] flex gap-4 ">
                <input
                  className={`bg-transparent ${workSans.variable} font-workSans text-lg leading-normal font-normal placeholder:font-normal text-[#434343CC] flex-1 focus-within:outline-none`}
                  placeholder="enter email of receiver"
                />
                <button
                  className={`${manrope.variable} font-manrope text-white px-[18px] py-[10px] rounded-lg bg-primary-300 font-medium text-[16px]`}
                >
                  Send
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-xl text-[#141414]">
                  Video Url
                </h3>
                <div className=" max-w-[502px] p-3 rounded-2xl border-[0.5px] border-[#929292] flex justify-between items-center">
                  <span
                    className={`${workSans.variable} font-workSans text-[#4B4B4B] text-[16px] leading-[161.5%] max-w-[390px] whitespace-nowrap text-ellipsis `}
                  >
                    https://www.helpmeout/Untitled_Video_20232509
                  </span>
                  <button
                    className={`${manrope.variable} font-manrope text-white px-[18px] py-[10px] rounded-lg border border-darkBlue text-darkBlue leading-[150%] font-medium text-[16px] flex items-center gap-2 justify-center`}
                  >
                    <Image src={copy} alt="Copy" />
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
