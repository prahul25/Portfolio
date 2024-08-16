"use client";
import React, { useContext, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeContext } from "@/app/RootLayoutClient"; // Make sure this path is correct
import { Fruktur } from "next/font/google";

const frukturFont = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
});


export function NavbarDemo() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="relative w-full flex justify-center select-none">
      <Navbar className={`top-0 ${frukturFont.className}`} onThemeToggle={handleThemeToggle} />
    </div>
  );
}

function Navbar({
  className,
  onThemeToggle,
}: {
  className?: string;
  onThemeToggle: () => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed max-w-lg mx-auto z-50 p-6 grid text-lg md:text-xl",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="">
          <MenuItem setActive={setActive} active={active} item="Skills" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects" />
        <MenuItem setActive={setActive} active={active} item="Contact Us" />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="light-switch"
            id="light-switch"
            className="sr-only"
            onChange={onThemeToggle}
          />
          <label className="relative cursor-pointer p-2" htmlFor="light-switch">
            <svg
              className="dark:hidden"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                className="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
            <svg
              className="hidden dark:block"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                className="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
            <span className="sr-only">Switch to light / dark version</span>
          </label>
        </div>
      </Menu>
    </div>
  );
}
