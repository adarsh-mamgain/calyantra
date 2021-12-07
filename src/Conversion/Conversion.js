import React from "react";
import Length from "./Length";
import Litre from "./Litre.js";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export function ConversionHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Link underline="none" to="length">
        <Typography variant="h2">Length</Typography>
      </Link>
      <Link underline="none" to="litre">
        <Typography variant="h2">Litre</Typography>
      </Link>
    </Box>
  );
}

export default function Conversion() {
  return (
    <Routes>
      <Route path="" element={<ConversionHome />} />
      <Route path="/length" element={<Length />} />
      <Route path="/litre" element={<Litre />} />
    </Routes>
  );
}
