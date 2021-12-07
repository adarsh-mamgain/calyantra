import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Calculator from "./Calculator/Calculator";
import Hash from "./Hash/Hash";
import Conversion from "./Conversion/Conversion";

export default function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/calculator/*" element={<Calculator />} />
          <Route path="/hash/*" element={<Hash />} />
          <Route path="/convert/*" element={<Conversion />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
