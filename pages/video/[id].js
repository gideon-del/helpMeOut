import Footer from "@/components/footer";
import Header from "@/components/header";
import { inter, manrope, sora, workSans } from "@/utils/font";
import edit from "@/public/assets/edit.svg";
import Image from "next/image";
import copy from "@/public/assets/copy.svg";
import facebook from "@/public/assets/facebook.svg";
import whatsapp from "@/public/assets/whatsapp.svg";
import telegram from "@/public/assets/telegram.svg";
import vidPng from "@/public/assets/video_frame.png";
import playImg from "@/public/assets/play-circle.svg";
import volume from "@/public/assets/volume-high.svg";
import settings from "@/public/assets/setting-2.svg";

const socials = [
  {
    img: facebook,
    text: "Facebook",
  },
  {
    img: whatsapp,
    text: "Whatsapp",
  },
  {
    img: telegram,
    text: "Telegram",
  },
];
const dummySub = [
  {
    timestamp: "0.01",
    subtitle: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the`,
  },
  {
    timestamp: "0.15",
    subtitle: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the`,
  },
  {
    timestamp: "0.30",
    subtitle: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the`,
  },
  {
    timestamp: "1.00",
    subtitle: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the`,
  },
];
export default function VideoDetail() {
  return (
    <>
      <Header />
      <main className="flex-1 my-20">
        <section className="max-w-[1240px] mx-auto flex gap-[72px]">
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
                    className={`${workSans.variable} font-workSans text-[#4B4B4B] text-[16px] leading-[161.5%] max-w-[390px] whitespace-nowrap text-ellipsis overflow-hidden `}
                  >
                    https://www.helpmeout/Untitled_Video_20232509
                  </span>
                  <button
                    className={`${manrope.variable} font-manrope  px-[18px] py-[10px] rounded-lg border border-darkBlue text-darkBlue leading-[150%] font-medium text-[16px] flex items-center gap-2 justify-center`}
                  >
                    <Image src={copy} alt="Copy" />
                    Copy
                  </button>
                </div>
              </div>
              <div>
                <h3
                  className={`text-primary-900 text-base font-semibold mb-[15px]`}
                >
                  Share your video
                </h3>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <button
                      className={`${inter.variable} font-inter font-medium text-[16px] leading-[150%] tracking-[0.16px] border border-primary-800 text-primary-900 rounded-md px-4 py-3 flex items-center gap-2`}
                      key={social.text}
                    >
                      <Image src={social.img} alt="Facebook" />
                      {social.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex flex-col gap-20 flex-1">
            <div
              className="flex flex-col rounded-lg border border-primary-400 overflow-hidden max-w-[575px] mx-auto min-h-[473px]"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
            >
              {/* <Image src={vidPng} alt="video" className="w-full flex-1" /> */}
              <video controls={false} className="flex-1" width={575}>
                <source src={vidPng.src} type="image/png" />
              </video>
              <div>
                <div className="h-1 w-1/4 bg-darkBlue rounded-full"></div>
                <div className="px-14 bg-white pt-4 pb-3 flex justify-between items-center">
                  <span
                    className={`${inter.variable} font-inter text-[#939393] font-medium text-2xl`}
                  >
                    0:30 / 3:00
                  </span>
                  <div className="flex items-center gap-10">
                    <div
                      className={`font-workSans ${workSans.variable} text-[#141414] text-xs font-medium`}
                    >
                      <Image src={playImg} alt="Play" />
                      <span>Play</span>
                    </div>
                    <div
                      className={`font-workSans ${workSans.variable} text-[#141414] text-xs font-medium`}
                    >
                      <Image src={volume} alt="Play" />
                      <span>Volume</span>
                    </div>
                    <div
                      className={`font-workSans ${workSans.variable} text-[#141414] text-xs font-medium`}
                    >
                      <Image src={settings} alt="Play" />
                      <span>Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-semibold text-2xl text-black">
                  Transcript
                </h2>
              </div>
              <div className="max-w-[575px] max-h-[256px] overflow-y-scroll subtitle_bg">
                {dummySub.map((sub) => (
                  <div className="flex mb-4" key={sub.timestamp}>
                    <span
                      className={`text-[#141414] font-workSans ${workSans.variable} text-[16px] font-normal leading-primary mt-1 mr-6 mb-6`}
                    >
                      {sub.timestamp}
                    </span>
                    <p
                      className={`font-inter ${inter.variable} text-[16px] leading-[163.023%] text-black font-medium`}
                    >
                      {sub.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
