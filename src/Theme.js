import { blue, grey, orange, rgba } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: blue,
          secondary: orange,
          background: {
            default: "#fff",
            paper: grey[300],
          },
        }
      : {
          // palette values for dark mode
          primary: blue,
          secondary: orange,
          background: {
            default: grey[900],
            paper: grey[800],
          },
        }),
  },
  typography: {
    h1: { fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)" },
    h2: { fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)" },
    h3: { fontSize: "2.25rem" },
    h4: { fontSize: "1.75rem" },
    h5: { fontSize: "1.5rem" },
    h6: { fontSize: "1.25rem" },
  },
  tooltip: {
    container: { background: "#ff0000" },
  },
});
