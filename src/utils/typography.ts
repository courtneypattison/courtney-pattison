import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Fira Mono", "monospace"],
  bodyFontFamily: ["Quicksand", "sans-serif"],
  googleFonts: [
    {
      name: "Fira Mono",
      styles: ["500"],
    },
    {
      name: "Quicksand",
      styles: ["400", "700"],
    },
  ],
});

export default typography;
