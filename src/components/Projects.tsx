"use client";
import React, { useState } from "react";
import data from "../projects.json";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SampleNextArrow, SamplePrevArrow } from "@/helper/sliderArrows";
import { Fruktur } from "next/font/google";
import Link from "next/link";

const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
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
      <div className="relative z-10 w-full p-4 flex justify-center items-center flex-col">
        <div
          className={`px-4 lg:px-10 py-2 lg:py-4 flex justify-center items-center text-4xl border-[3px] rounded-xl dark:hover:text-[#111827] dark:hover:bg-red-400 dark:hover:border-[#111827] hover:text-[#f0f0ff] hover:bg-[#6666FF] hover:border-[#f0f0ff] text-[#6666FF] border-[#6666FF] dark:text-red-400 dark:border-red-400 dark:bg-[#111827] bg-[#f0f0ff] mb-24 mt-16 ${frukturFont.className}`}
        >
          Projects
        </div>
        <div className="relative z-50 w-8/12 h-[420px] md:h-[500px] lg:h-[580px] xl:h-[670px] overflow-hidden rounded-lg bg-[#6666FF] dark:bg-red-400 shadow-md flex flex-col justify-end">
          <div className="relative w-full h-full">
            <Image
              src={data[currentIndex].image}
              alt={data[currentIndex].title}
              fill // Make the image cover the div
              quality={100}
              className="rounded-lg w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 bg-[#6666FF] dark:bg-[#111827] p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
  <div className="flex justify-between items-center space-x-4">
    
    {/* Title and Skills Section */}
    <div className="flex items-center space-x-2 md:space-x-4">
      <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-0">
        {data[currentIndex].title}
      </p>
      <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-0">
        {data[currentIndex].skills}
      </p>
    </div>

    {/* Links Section */}
    <div className="flex space-x-4">
      {data[currentIndex].project_link && (
        <Link
          href={data[currentIndex].project_link}
          className="text-blue-300 hover:text-blue-500 text-lg md:text-xl lg:text-2xl"
        >
          <FaExternalLinkAlt />
        </Link>
      )}
      {data[currentIndex].github_link && (
        <Link
          href={data[currentIndex].github_link}
          className="text-blue-300 hover:text-blue-500 text-lg md:text-xl lg:text-2xl"
        >
          <ImGithub />
        </Link>
      )}
    </div>
  </div>

  <p className="text-gray-200 text-xs md:text-sm lg:text-lg mt-4">
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
