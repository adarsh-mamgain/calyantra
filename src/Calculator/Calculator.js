import React from "react";
import GPA from "./GPA";
import SimpleInterest from "./SimpleInterest";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export function CalculatorHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Link underline="none" to="gpa">
        <Typography variant="h2">GPA</Typography>
      </Link>
      <Link underline="none" to="simple-interest">
        <Typography variant="h2">Simple Interest</Typography>
      </Link>
    </Box>
  );
}

export default function Calculator() {
  return (
    <Routes>
      <Route path="" element={<CalculatorHome />} />
      <Route path="/gpa" element={<GPA />} />
      <Route path="/simple-interest" element={<SimpleInterest />} />
    </Routes>
  );
}
