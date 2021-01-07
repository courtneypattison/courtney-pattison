import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Fira Mono", "monospace"],
  bodyFontFamily: ["Merriweather", "serif"],
  googleFonts: [
    {
      name: "Fira Mono",
      styles: ["500"],
    },
    {
      name: "Merriweather",
      styles: ["400"],
    },
  ],
});

export default typography;
