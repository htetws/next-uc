"use client";

import { payment } from "@/utils/constants/footer";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full lg:w-[75%] mx-auto space-y-4 lg:space-y-10 border-t-2 border-slate-100 dark:border-slate-700/40">
      <nav className="hidden lg:flex justify-between items-center mt-4">
        <div className="flex gap-2 h-6">
          {payment.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt="payment"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
          ))}
        </div>
        <div className="flex items-center gap-x-6">
          <span className="text-xs">Stay updated with us</span>
          <div className="flex gap-x-4 ">
            <FaFacebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <FaYoutube className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <FaTiktok className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </nav>
      <main className="hidden lg:flex justify-between">
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xs">About UCDIA</h1>
            <ul className="text-[.7rem] text-muted-foreground space-y-2 font-bold">
              <li>About Us</li>
              <li>UCDIA News</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xs">Shopping</h1>
            <ul className="text-[.7rem] text-muted-foreground space-y-2 font-bold">
              <li>UCDIA Star Rewards</li>
              <li>KALEOZ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xs">Legal</h1>
            <ul className="text-[.7rem] text-muted-foreground space-y-2 font-bold">
              <li>Terms of use</li>
              <li>Terms of sale</li>
              <li>Privacy Policy</li>
              <li>Prohibited Content Policy</li>
              <li>特定商取引法に基づく表示</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xs">Partners</h1>
            <ul className="text-[.7rem] text-muted-foreground space-y-2 font-bold">
              <li>Partnership</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center h-[5rem] gap-3 bg-gradient-to-tr from-[#00E0FF] via-[#0098FF] to-[#0098FF] px-8 py-2 rounded-2xl hover:scale-105 transition cursor-pointer">
          <Image
            src="https://seagm-media.seagmcdn.com/art/v5/home/google-play-gift-card.png?x-oss-process=image/resize,w_240"
            alt="playstore"
            width={150}
            height={150}
            className="w-full h-full object-contain py-1 pe-1"
          />
          <div className="font-bold flex flex-col space-y-1">
            <h1 className="truncate">UCDIA In your pocket</h1>
            <span className="text-xs text-slate-300">Get the App Now!</span>
          </div>
        </div>
      </main>
      <footer className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 pb-2 lg:pb-6">
        <Image
          width={30}
          height={30}
          src="./logo.svg"
          alt="logo"
          className=""
        />
        <div className="font-bold text-xs lg:text-sm text-muted-foreground/40">
          Copyright © {new Date().getFullYear()} UCDIA. All rights reserved.
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
