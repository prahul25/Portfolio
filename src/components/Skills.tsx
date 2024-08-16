"use client";
import React from "react";
import { Fruktur } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGithubSquare,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  SiExpress,
  SiJavascript,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import IconComponent from "@/helper/IconComponent";

const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});
function Skills() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full flex flex-col select-none lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <div className='relative z-20 w-full flex flex-col justify-center items-center mt-16'>
    <div className={`px-10 py-4 flex justify-center items-center text-4xl border-[3px] rounded-xl dark:hover:text-[#111827] dark:hover:bg-red-400 dark:hover:border-[#111827] hover:text-[#f0f0ff] hover:bg-[#6666FF] hover:border-[#f0f0ff] text-[#6666FF] border-[#6666FF] dark:text-red-400 dark:border-red-400 dark:bg-[#111827] bg-[#f0f0ff] ${frukturFont.className}`}>
        Skills
    </div>
    <div className='dark:bg-red-400 bg-[#6666FF] w-11/12 md:w-9/12 mt-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-x-4 gap-y-4 mb-40 p-4 md:p-6 rounded-2xl'>
    <IconComponent icon={<FaHtml5 />} text={'HTML'} />
    <IconComponent icon={<FaCss3 />} text={'Css'} />
    <IconComponent icon={<SiJavascript />} text={'Javascript'} />
    <IconComponent icon={<SiTypescript />} text={'Typescript'} />
    <IconComponent icon={<FaReact />} text={'React'} />
    <IconComponent icon={<TbBrandNextjs />} text={'NextJs'} />
    <IconComponent icon={<FaNodeJs />} text={'Nodejs'} />
    <IconComponent icon={<SiExpress />} text={'ExpressJs'} />
    <IconComponent icon={<TbBrandRedux />} text={'Redux'} />
    <IconComponent icon={<BiLogoMongodb />} text={'MongoDB'} />
    <IconComponent icon={<FaGithubSquare />} text={'Github'} />
    <IconComponent icon={<SiPostman />} text={'Postman'} />
</div>

</div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}

export default Skills;
