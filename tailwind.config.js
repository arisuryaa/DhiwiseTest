module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f8f8f8", 100: "#f5f5f5", 600: "#757575", 700: "#646464" },
        black: {
          900: "#000000",
          "900_c4": "#000000c4",
          "900_9e": "#0000009e",
          "900_3f": "#0000003f",
          "900_b5": "#000000b5",
          "900_42": "#00000042",
          "900_68": "#00000068",
          "900_59": "#00000059",
        },
        blue_gray: { 50: "#f1f1f1", 100: "#d9d9d9", "100_28": "#d9d9d928" },
        green: { 700: "#17b127", A700: "#29ea3d" },
        indigo: {
          800: "#225081",
          "400_d8": "#427ebed8",
          "800_db": "#225081db",
        },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs3: "0px -5px  1px 0px #29ea3d",
        bs: "0px 4px  4px 0px #0000003f",
        bs2: "0px -5px  4px 0px #0000003f",
        bs1: "-5px 4px  4px 0px #0000003f",
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#225081,#d9d9d928)",
        gradient1: "linear-gradient(113deg ,#225081db,#427ebed8)",
      },
      textShadow: { ts: "0px -5px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
