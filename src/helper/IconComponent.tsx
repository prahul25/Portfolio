import React from 'react';
import { Covered_By_Your_Grace } from "next/font/google";

const graceFont = Covered_By_Your_Grace({
    subsets:['latin'],
    weight:['400']
})

function IconComponent({ icon, className = undefined, text }:any) {
  return (
    <div className={`flex items-center justify-evenly gap-2 cursor-default border border-[#6666FF] dark:border-red-400 hover:border-[#cbcbfd] dark:hover:border-red-100 dark:bg-[#111827] bg-[#021709] dark:text-red-400 text-[#6666FF] p-2 w-36 rounded-md  ${className}`}>
      <div className="text-3xl transform transition-transform duration-500 ease-in-out hover:rotate-180">{icon}</div>
      <p className={`text-white text-lg ${graceFont.className}`}>{text}</p>
    </div>
  );
}

export default IconComponent;
