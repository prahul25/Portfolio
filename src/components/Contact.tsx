"use client";
import { Fruktur, Exo_2 } from "next/font/google";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp ,FaGithub,FaLinkedin } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});

const exoFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
});

function Contact() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className={`px-4 uppercase lg:px-10 py-2 lg:py-4 flex justify-center items-center text-4xl border-[3px] rounded-xl dark:hover:text-[#111827] dark:hover:bg-red-400 dark:hover:border-[#111827] hover:text-[#f0f0ff] hover:bg-[#6666FF] hover:border-[#f0f0ff] text-[#6666FF] border-[#6666FF] dark:text-red-400 dark:border-red-400 dark:bg-[#111827] bg-[#f0f0ff] mb-24 mt-16 ${frukturFont.className}`}
      >
        Connect with me
      </div>
      <div className="flex w-full flex-col">
        <div
          className={`w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-3xl lg:text-4xl ${exoFont.className}`}
        >
          <Link
            href="https://github.com/prahul25"
            className="flex justify-between items-center px-4 py-2 lg:px-6 lg:py-4 bg-[#333333] hover:bg-[#252629]"
          >
            <p>Github</p>
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rahulkumarpal25"
            className="flex justify-between items-center px-4 py-2 lg:px-6 lg:py-4 bg-[#0077b5] hover:bg-[#015684]"
          >
            <p>LinkedIn</p>
            <FaLinkedin />
          </Link>
          <Link
            href="https://twitter.com/p_rahul25"
            className="flex justify-between items-center px-4 py-2 lg:px-6 lg:py-4 bg-[#1DA1F2] hover:bg-[#1573af]"
          >
            <p>Twitter</p>
            <FaSquareXTwitter />
          </Link>
          <Link
            href="https://wa.me/+917048252720"
            className="flex justify-between items-center px-4 py-2 lg:px-6 lg:py-4 bg-[#128C7E] hover:bg-[#1d6960]"
          >
            <p>Whatsapp</p>
            <FaSquareWhatsapp />
          </Link>
        </div>

        <Link
          href="mailto:rahul.pal252720@gmail.com"
          className={`w-full flex justify-center uppercase items-center gap-8 dark:bg-red-400 hover:dark:bg-red-500 bg-[#6666FF] hover:bg-[#4f4fc7] py-4 text-2xl ${frukturFont.className}`}
        >
          Shoot me a mail <TbMailFilled/>
        </Link>

        <div className={`w-full flex py-2 justify-center items-center text-[#6666FF] dark:text-red-400 ${frukturFont.className}`}>
          Built From Scratch With <FaHeart className="mx-2"/>© Copyright 2024, All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Contact;
