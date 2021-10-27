module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      zIndex: {
        "-0": "-1",
        60: "100",
      },
      inset: {
        "-31.5": "-7.4rem",
        104: "42rem",
      },
      fontSize: {
        "11xl": "250px",
      },
      width: {
        106: "42rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
      margin: ["group-hover"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
