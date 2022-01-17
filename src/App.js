import React from "react";
import { Box } from "@mui/material";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Router from "./Routes";

export default function App() {
  return (
    <Box>
      <Navigation />
        <Router />
      <Footer />
    </Box>
  );
}
