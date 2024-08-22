"use client";

import { Fruktur } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import Profile from "./Profile";

const jetbrain_font = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["800"],
});

const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});

function LandingPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      id="home"
    >
      <div
        className="absolute top-0 dark:bg-[#111827] bg-[#6666FF] border rounded-xl"
        style={{
          height: "calc(100vh - 5vh)",
          width: "calc(100vw - 2vw)",
          margin: "2.5vh 2.5vw",
        }}
      >
        {/* Your content here */}
        <div className="absolute top-24 lg:top-56 flex w-full flex-col-reverse lg:flex-row">
          {" "}
          {/* prevoius it was flex-col-reverse */}
          {/* text part start from here */}
          <div
            style={{ marginLeft: "calc(100vw - 85vw)" }}
            className={`flex w-full flex-wrap min-w-0  mt-72 lg:mt-0 ${jetbrain_font.className}`}
          >
            <div>
              <h1
                className="text-nowrap text-3xl md:text-5xl"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
              >
                Hello I&apos;m Rahul
              </h1>
              <div
                className="text-2xl flex items-center gap-1 md:text-4xl text-wrap text-[#FF6F61] dark:text-red-400 tracking-wide font-bold mt-2 mb-4"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
              >
                <span className="text-white">A</span>
                <p className={`${frukturFont.className} uppercase`}>
                  <Typewriter
                    words={[
                      "Fullstack",
                      "Frontend",
                      "Backend",
                      "ReactJs",
                      "Mernstack",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </p>
                <span className="text-white">Developer</span>
              </div>
              <div className="w-10/12 lg:w-full text-wrap">
                <h1 className="text-sm text-wrap text-start text-gray-200 tracking-wide leading-relaxed dark:text-indigo-400 font-light">
                  Passionate developer eager to build innovative projects,
                  explore new technologies, and tackle exciting challenges.
                </h1>
              </div>
              <div className="lg:mt-14 mt-8 flex w-9/12 justify-between items-center gap-2">
                <Link
                  href="./Resume_Rahul.pdf"
                  download
                  className="relative z-10 overflow-hidden text-[#FF6F61] border-[3px] border-none hover:bg-[#FF6F61] hover:text-white hover:border-white border-[#FF6F61] flex items-center rounded-full p-[1px] lg:p-[2px] uppercase gap-2"
                >
                  {/* Rotating Background */}
                  <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#ffffff_20deg,transparent_120deg)]"></div>

                  {/* Button Content */}
                  <div className="relative z-20 flex items-center gap-1 lg:gap-2 rounded-full bg-[#6666FF] dark:bg-[#111827] px-1 py-1 lg:px-4 lg:py-2">
                    <span className="text-sm lg:text-lg">Download CV</span>

                    <FiDownload />
                  </div>
                </Link>

                <div className="flex justify-center items-center gap-4 lg:gap-10 text-xl text-[#FF6F61]">
                  <Link href="https://www.linkedin.com/in/rahulkumarpal25">
                    <div className="h-10 w-10 border-[2px] rounded-full flex justify-center items-center  border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white">
                      <FiLinkedin />
                    </div>
                  </Link>
                  <Link href="https://github.com/prahul25">
                    <div className="h-10 w-10 border-[2px] rounded-full flex justify-center items-center  border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white">
                      <FiGithub />
                    </div>
                  </Link>
                  <Link href="https://twitter.com/p_rahul25">
                    <div className="h-10 w-10 border-[2px] rounded-full flex justify-center items-center border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white">
                      <FiTwitter />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* text part end here */}
          {/* image part start from here  */}
          <div className="flex w-full justify-center items-center">
            <Profile />
          </div>
          {/* image part end here */}
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
