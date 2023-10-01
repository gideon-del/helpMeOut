import React from "react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { inter, sen, workSans } from "@/utils/font";
import google from "@/public/assets/google.svg";
import facebook from "@/public/assets/facebook.svg";
import lineImg from "@/public/assets/line.svg";
const Auth = () => {
  return (
    <main className="flex-1 pt-[90px] pl-[120px]">
      <figure className="mb-[38px]">
        <Image src={logo} alt="Logo" />
      </figure>
      <section>
        <div className="w-3/4 max-w-[475px] mx-auto flex flex-col gap-8 mb-[125px] ">
          <div
            className={`${inter.variable} font-inter max-w-[321px] text-center w-fit mx-auto flex flex-col gap-2`}
          >
            <h1
              className={` text-[141414] font-bold leading-[150%] text-[32px] tracking-[0.32px]`}
            >
              Log in or Sign up
            </h1>
            <p className=" font-light leading-[150%] tracking-[0.14px] text-[14px] text-[#434343] ">
              Join millions of others in sharing successful moves on{" "}
              <span className={`${sen.variable} font-sen font-normal`}>
                HelpMeOut
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className={`${inter.variable} font-inter`}>
              <button className="flex justify-center items-center text-[#141414] text-[16px] font-medium leading-[150%] tracking-[0.16px] rounded-xl py-[9px] border border=[#141414] px-[10px] gap-4 w-full">
                <Image src={google} alt="Google" />
                Continue with Google
              </button>
            </div>
            <div className={`${inter.variable} font-inter`}>
              <button className="flex justify-center items-center text-[#141414] text-[16px] font-medium leading-[150%] tracking-[0.16px] rounded-xl py-[9px] border border=[#141414] px-[10px] gap-4 w-full">
                <Image src={facebook} alt="Facebook" />
                Continue with Facebook
              </button>
            </div>
          </div>
          <div className={`w-fit mx-auto`}>
            <Image src={lineImg} alt="Line" />
          </div>
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className=" flex flex-col gap-4">
              <div
                className={`${workSans.variable} font-workSans flex flex-col gap-3`}
              >
                <label
                  htmlFor="email"
                  className="text-[#141414] text-base font-medium"
                >
                  Email
                </label>
                <input
                  className="bg-transparent p-4 rounded-xl text-[#62626] w-full font-medium border border-primary-100"
                  placeholder="Enter your email address"
                  id="email"
                />
              </div>
              <div
                className={`${workSans.variable} font-workSans flex flex-col gap-3`}
              >
                <label
                  htmlFor="password"
                  className="text-[#141414] text-base font-medium"
                >
                  Password
                </label>
                <input
                  className="bg-transparent p-4 rounded-xl text-[#62626] w-full font-medium border border-primary-100"
                  placeholder="Enter your Password "
                  id="password"
                />
              </div>
            </div>
            <button
              className={`${workSans.variable} font-workSans text-lg font-medium px-5 py-4 bg-darkBlue rounded-lg text-[#F9F9FF]`}
            >
              {" "}
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Auth;
