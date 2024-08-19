"use client";
import React, { useState } from "react";
import data from "../projects.json";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SampleNextArrow, SamplePrevArrow } from "@/helper/sliderArrows";
import { Fruktur, Exo_2 } from "next/font/google";
import Link from "next/link";

const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});
const exoFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
});

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto flex flex-col bg-black justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={data[currentIndex].image}
          alt={data[currentIndex].title}
          fill
          quality={100}
          className="object-cover filter blur-lg"
        />
      </div>

      {/* Overlay Layer */}
      <div className="relative z-10 w-full h-full p-4 flex justify-center items-center flex-col">
        <div
          className={`px-4 lg:px-10 py-2 lg:py-4 flex justify-center items-center text-4xl border-[3px] rounded-xl dark:hover:text-[#111827] dark:hover:bg-red-400 dark:hover:border-[#111827] hover:text-[#f0f0ff] hover:bg-[#6666FF] hover:border-[#f0f0ff] text-[#6666FF] border-[#6666FF] dark:text-red-400 dark:border-red-400 dark:bg-[#111827] bg-[#f0f0ff] mb-24 mt-16 ${frukturFont.className}`}
        >
          Projects
        </div>
        <div className="relative z-50 w-8/12 h-[260px] sm:h-[310px] md:h-[380px] lg:h-[510px] xl:h-[635px] overflow-hidden rounded-lg bg-white dark:bg-[#111827] flex flex-col justify-end shadow-2xl shadow-black border-[1px] border-slate-500">
          <div className="relative w-full h-full">
            <Image
              src={data[currentIndex].image}
              alt={data[currentIndex].title}
              fill // Make the image cover the div
              quality={100}
              className="rounded-lg w-full object-cover border-b-[1px] border-b-slate-600"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 py-2 px-4 md:p-6 lg:p-8 rounded-lg bg-white dark:bg-[#111827]">
            <div className="flex justify-between items-center space-x-1 lg:space-x-2">
              {/* Title and Skills Section */}
              <div className="flex items-center space-x-2 lg:space-x-4">
                <p
                  className={`text-lg md:text-xl lg:text-2xl font-bold text-[#6666FF] dark:text-red-400 mb-0 ${frukturFont.className}`}
                >
                  {data[currentIndex].title}
                </p>
                <div
                  className={`px-2 py-[2px] flex justify-center items-center border-[1px] rounded-xl dark:hover:text-[#111827] dark:hover:bg-red-100 dark:hover:border-[#111827] hover:text-[#111827] hover:bg-[#f0f0ff] hover:border-[#f0f0ff] text-[#f0f0ff] dark:text-[#111827] dark:bg-white bg-[#111827] ${exoFont.className}`}
                >
                  <p className="text-sm lg:text-lg">
                    {data[currentIndex].skills}
                  </p>
                </div>
              </div>

              {/* Links Section */}
              <div className="flex space-x-4 items-center">
                {data[currentIndex].project_link && (
                  <Link
                    href={data[currentIndex].project_link}
                    className={`gap-2 text-sm lg:text-lg flex items-center px-[10px] py-[2px] rounded-xl bg-[#f0f0ff] text-[#111827] hover:bg-[#111827] hover:text-[#f0f0ff] dark:text-red-100 dark:bg-[#111827] dark:hover:bg-white dark:hover:text-black ${exoFont.className}`}
                  >
                    <p>Visit</p>
                    <FaExternalLinkAlt />
                  </Link>
                )}
                {data[currentIndex].github_link && (
                  <Link
                    href={data[currentIndex].github_link}
                    className="bg-[#f0f0ff] rounded-full p-2 text-xl text-[#111827] hover:bg-[#111827] hover:text-[#f0f0ff] dark:text-red-100 dark:bg-[#111827] dark:hover:bg-white dark:hover:text-black"
                  >
                    <ImGithub />
                  </Link>
                )}
              </div>
            </div>

            <p
              className={`dark:text-white text-xs md:text-sm lg:text-lg mt-2 text-[#111827] ${exoFont.className}`}
            >
              {data[currentIndex].description}
            </p>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute transform  left-9 lg:left-24 text-[#6666FF] dark:text-red-400 z-20"
          style={{ bottom: "35%" }}
          title="Previous"
        >
          <SamplePrevArrow className={"text-4xl lg:text-5xl"} />
        </button>

        <button
          onClick={goToNext}
          className="absolute transform right-9 lg:right-24 text-[#6666FF] dark:text-red-400 z-20"
          style={{ bottom: "35%" }}
          title="Next"
        >
          <SampleNextArrow className={"text-4xl lg:text-5xl"} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
