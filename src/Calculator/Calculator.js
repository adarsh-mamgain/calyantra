import React from "react";
import GPA from "./GPA";
import SimpleInterest from "./SimpleInterest";
import PageNotFound from "../Components/Static/404"
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

export function CalculatorHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Helmet>
        <title>Online calculators | Mangya.tech</title>
        <meta name="title" content="Online calculators | Mangya.tech" />
        <meta name="description" content="Calculate your GPAs, Interest, BMI." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mangya.tech/calculator" />
        <meta property="og:title" content="Online calculators | Mangya.tech" />
        <meta property="og:description" content="Calculate your GPAs, Interest, BMI." />
        <meta property="og:image" content="https://mangya.tech/illustration.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mangya.tech/calculator" />
        <meta property="twitter:title" content="Online calculators | Mangya.tech" />
        <meta property="twitter:description" content="Calculate your GPAs, Interest, BMI." />
        <meta property="twitter:image" content="https://mangya.tech/illustration.svg" />
      </Helmet>
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
