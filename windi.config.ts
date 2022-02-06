import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",

  attributify: true,

  plugins: [require("windicss/plugin/typography")],

  theme: {
    extend: {
      fontFamily: {
        sans: ["'Press Start 2P'"],
      },
    },
  },
});
