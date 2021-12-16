import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Home";
import Calculator from "./Calculator/Calculator";
import Hash from "./Hash/Hash";
import Conversion from "./Conversion/Conversion";
import PageNotFound from "./Components/Static/404";
import { Privacy, Terms } from "./Components/Static/Legal";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator/*" element={<Calculator />} />
          <Route path="/hash/*" element={<Hash />} />
          <Route path="/convert/*" element={<Conversion />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}
