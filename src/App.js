import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Router from "./Routes";
import { getDesignTokens } from "./Theme";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = React.useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navigation getTheme={theme} getColorMode={colorMode} />
        <Router />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
