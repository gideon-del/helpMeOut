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
import logoFooter from "@/public/assets/logo_footer.svg";
import FooterNav from "@/components/footerNav";
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
export default function Home() {
  return (
    <>
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
      <main>
        <section className="max-w-[1240px] mx-auto flex items-center mt-[107px]  gap-6 mb-[136px] ">
          <div className="max-w-[548px] ">
            <h2
              className={`max-w-[468px] mb-5 ${sora.variable} font-saro text-[64px] text-[#141414] font-bold leading-[100%]`}
            >
              Show Them Don&apos;t Just Tell
            </h2>
            <p
              className={`text-black/75 mb-12 ${inter.variable} font-inter font-normal text-xl leading-7 max-w-[548px]`}
            >
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <button
              className={`py-[22px] px-6 rounded-lg bg-darkBlue gap-3 ${workSans.variable} font-workSans font-medium text-lg text-white items-center flex`}
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
            className="flex gap-8 flex-1 self-stretch px-12  pt-16 pb-20"
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
        <section id="features" className="max-w-[1240px] mx-auto lg:py-20">
          <h2
            className={`${sora.variable} font-saro font-bold text-[40px] text-[#141414] text-center mb-2`}
          >
            Features
          </h2>
          <p
            className={`${workSans.variable} font-workSans text-[#616163] font-normal text-xl leading-[151.3%] text-center mb-16`}
          >
            Key Highlights of Our Extension
          </p>
          <section className="grid grid-cols-2 gap-14  mx-auto">
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
            className={`${sora.variable} font-saro font-bold text-[40px]  text-[#141414] text-center mb-[59px]`}
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
      <footer className="lg:py-[98px] lg:px-[130px] bg-darkBlue flex justify-between items-start">
        <div>
          <Image src={logoFooter} alt="Footer Logo" />
        </div>
        <div className="basis-2/3 flex justify-between">
          {footerList.map((lists) => (
            <FooterNav key={lists} {...lists} />
          ))}
        </div>
      </footer>
    </>
  );
}
