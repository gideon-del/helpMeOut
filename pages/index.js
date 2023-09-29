import Image from "next/image";
import hero1 from "@/public/assets/hero_1.png";
import hero2 from "@/public/assets/hero_2.png";
import hero3 from "@/public/assets/hero_3.png";
import bgTop from "@/public/assets/hero_bg_top.png";
import bgBottom from "@/public/assets/hero_bg_bottom.png";
import logo from "@/public/assets/logo.svg";
import record from "@/public/assets/placeholder_record.svg";
import share from "@/public/assets/placeholder_share.svg";
import revisit from "@/public/assets/placeholder_revisit.svg";
import videoImg from "@/public/assets/placeholder_video.png";
import works1 from "@/public/assets/works_1.svg";
import works2 from "@/public/assets/works_2.svg";
import works3 from "@/public/assets/works_3.svg";
import worksPlaceholder from "@/public/assets/works_placeholder.png";
import { workSans, inter, sora } from "@/utils/font";
import Feature from "@/components/feature";
import Works from "@/components/works";
import Footer from "@/components/footer";
import Header from "@/components/header";

const features = [
  {
    img: record,
    title: "Simple Screen Recording",
    desc: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
  },
  {
    img: share,
    title: "Easy-to-Share URL",
    desc: "Share your recordings instantly with a single link. No attachments, no downloads.",
  },
  {
    img: revisit,
    title: "Revisit Recordings",
    desc: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
  },
];
const howItWorks = [
  {
    img: works1,
    title: "Record Screen",
    desc: 'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
  },
  {
    img: works2,
    title: "Share Your Recording",
    desc: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
  },
  {
    img: works3,
    title: "Learn Effortlessly",
    desc: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center mt-[107px]  gap-6 mb-[136px] flex-1 ">
          <div className="max-w-[548px] flex flex-col items-center lg:items-start ">
            <h2
              className={`max-w-[468px] mb-5 ${sora.variable} font-saro lg:text-[64px] md:text-[30px] text-[20px]  text-[#141414] font-bold leading-[100%]`}
            >
              Show Them Don&apos;t Just Tell
            </h2>
            <p
              className={`text-black/75 lg:mb-12 mb-6 ${inter.variable} text-center mx-auto lg:mx-0 lg:text-start font-inter font-normal lg:text-xl md:text-lg text-base leading-7 max-w-[548px]`}
            >
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <button
              className={`lg:py-[22px] lg:px-6 py-5 px-3 rounded-lg bg-darkBlue gap-3 ${workSans.variable} font-workSans font-medium lg:text-lg text-base text-white items-center flex`}
            >
              <span>Install HelpMeOut</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91699 10.5H16.942"
                  stroke="White"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(${bgTop.src}), url(${bgBottom.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "330px 313px",
              backgroundPosition: " 125% 0, -25% 100%",
            }}
            className="flex gap-8 flex-1 self-stretch lg:px-12  lg:pt-16 lg:pb-20 px-6 py-7"
          >
            <div className="flex flex-col gap-4 items-center place-content-center">
              <Image src={hero1} alt="hero" className="rounded-xl" />
              <Image src={hero2} alt="hero" className="rounded-xl" />
            </div>
            <div className="flex items-center">
              <Image src={hero3} alt="hero" className="rounded-xl" />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="max-w-[1240px] mx-auto lg:py-20 mb-14 lg:mb-28 px-10 lg:px-0"
        >
          <h2
            className={`${sora.variable} font-saro font-bold lg:text-[40px] md:text-4xl text-3xl text-[#141414] text-center mb-2`}
          >
            Features
          </h2>
          <p
            className={`${workSans.variable} font-workSans text-[#616163] font-normal lg:text-xl text-lg leading-[151.3%] text-center mb-16`}
          >
            Key Highlights of Our Extension
          </p>
          <section className="lg:grid lg:grid-cols-2  lg:gap-14 flex items-center   flex-col gap-7  mx-auto">
            <div className="flex flex-col gap-12">
              {features.map((feature, i) => (
                <Feature key={i} {...feature} />
              ))}
            </div>

            <div>
              <Image src={videoImg} alt="Placeholder Video" />
            </div>
          </section>
        </section>
        <section className="max-w-[1240px] mx-auto lg:py-20">
          <h2
            className={`${sora.variable} font-saro font-bold lg:text-[40px] md:text-4xl text-3xl  text-[#141414] text-center mb-[59px]`}
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[83px]">
            {howItWorks.map((work, i) => (
              <Works key={i} {...work} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
