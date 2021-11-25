import React from "react";
import GPA from "./GPA";
import { Routes, Route } from "react-router";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export function Home() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Link underline="none" to="gpa">
        <Typography variant="h1">GPA</Typography>
      </Link>
    </Box>
  );
}

export default function Calculator() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/gpa" element={<GPA />} />
    </Routes>
  );
}
