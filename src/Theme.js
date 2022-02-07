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
    h1: { fontSize: "4rem" },
    h2: { fontSize: "3rem" },
    h3: { fontSize: "2.34rem" },
    h4: { fontSize: "2rem" },
    h5: { fontSize: "1.66rem" },
    h6: { fontSize: "1.34rem" },
  },
});
