const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 10s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      boxShadow: {
        'top': '0 -4px 6px -2px rgba(255, 255, 255, 1)',
        'top-sides': '0 -4px 6px -2px rgba(255, 255, 255, 0.5), -4px 0 6px -2px rgba(255, 255, 255, 0.5), 4px 0 6px -2px rgba(255, 255, 255, 0.5), 0 4px 6px -2px rgba(255, 255, 255, 0.5)',
      }
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
      rotate: {
        '0%': { transform: 'rotate(0deg) scale(10)' },
        '100%': { transform: 'rotate(-360deg) scale(10)' },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
