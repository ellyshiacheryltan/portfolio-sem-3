/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#A4C4C4", // Cadet blue
          2: "#4D3477", // Royal purple
          3: "#CDC3AA", // Almond
          4: "#C3C4E3", // Periwinkle
          5: "rgba(255, 255, 255, .01)",
          6: "rgba(255, 255, 255, .1)",
        },
        n: {
          1: "#FFFFFF", // White
          2: "rgba(255, 255, 255, 0.1)", //Translucent white
          3: "rgba(255, 255, 255, 0.2)", // Translucent white - more solid
        },
      },

      boxShadow: {
        inner:
          "rgb(0, 28, 177, .1) 2px 2px 5px 0px inset, rgb(92, 207, 223, .1) -2px -2px 5px 0px inset;", //Iridescent inner shadow
        dropShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
      },

      fontFamily: {
        instrumentSerifItalic: "var(--font-instrumentSerifItalic)",
        inter: "var(--font-inter)",
        interItalic: "var(--font-interItalic)",
        leagueGothic: "var(--font-leagueGothic)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },

      borderWidth: {
        DEFAULT: "0.0625rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1-1": {
          "@apply font-instrumentSerifItalic text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h1-2": {
          "@apply font-leagueGothic uppercase text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply font-instrumentSerifItalic text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply font-instrumentSerifItalic text-[1rem] leading-normal md:text-[1.5rem]":
            {},
        },
        ".h4": {
          "@apply font-leagueGothic text-[1rem] leading-normal md:text-[1.5rem]":
            {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-interItalic text-xs uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
