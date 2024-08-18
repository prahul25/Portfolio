"use client";
import React, { useState } from "react";
import data from "../projects.json";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "@/helper/sliderArrows";
import { Fruktur } from "next/font/google";

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
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data[currentIndex].image}
          alt="background image"
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
        <div className="relative z-50 w-8/12 lg:w-7/12 overflow-hidden rounded-lg bg-[#6666FF] dark:bg-red-400 shadow-md">
          <Image
            src={data[currentIndex].image}
            alt={data[currentIndex].title}
            quality={100}
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
          <h2 className="text-xl font-bold mb-2">{data[currentIndex].title}</h2>
          <p className="text-gray-700 mb-4">{data[currentIndex].description}</p>
          <p className="text-sm text-gray-500 mb-4">
            Skills: {data[currentIndex].skills}
          </p>
          <div className="flex space-x-4">
            {data[currentIndex].project_link && (
              <a
                href={data[currentIndex].project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Project
              </a>
            )}
            {data[currentIndex].github_link && (
              <a
                href={data[currentIndex].github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Code
              </a>
            )}
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute transform  left-9 lg:left-24 text-[#6666FF] dark:text-red-400 z-20"
          style={{ bottom: "35%" }}
        >
          <SamplePrevArrow className={"text-4xl lg:text-5xl"} />
        </button>

        <button
          onClick={goToNext}
          className="absolute transform right-9 lg:right-24 text-[#6666FF] dark:text-red-400 z-20"
          style={{ bottom: "35%" }}
        >
          <SampleNextArrow className={"text-4xl lg:text-5xl"} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
