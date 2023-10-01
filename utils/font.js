import { Inter, Manrope, Sen, Sora, Work_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  variable: "--font-inter",
});
export const sora = Sora({
  weight: ["600", "700"],
  variable: "--font-sora",
  subsets: ["latin"],
});
export const workSans = Work_Sans({
  weight: ["400", "500"],
  variable: "--font-workSans",
  subsets: ["latin"],
});
export const manrope = Manrope({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-manrope",
});
export const sen = Sen({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sen",
});
