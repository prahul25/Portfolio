"use client"; // Ensures this file runs on the client

import { createContext, useState, useEffect } from "react";
import { NavbarDemo } from "@/components/Navbar";

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
});

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <NavbarDemo />
        <main>{children}</main>
      </div>
    </ThemeContext.Provider>
  );
}
