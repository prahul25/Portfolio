"use client";
import { Fruktur, Exo_2 } from "next/font/google";
import Link from "next/link";


const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});

function Contact() {
  return (
    <div className="w-full flex flex-col bg-white justify-center items-center">
        <div className="text-center">Connect with me</div>
        <div className="flex w-full flex-col">
            <div className="w-full"></div>
            <div className="w-full">
                <Link href="sds"></Link>
            </div>
            <div className="w-full text-black">Built From Scratch With 💚 © Copyright 2022, All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Contact