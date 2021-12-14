import React from "react";
import Length from "./Length";
import Litre from "./Litre";
import PageNotFound from "../Components/Static/404";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

export function ConversionHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Helmet>
        <title>Online converter | Mangya.tech</title>
        <meta name="title" content="Online converter | Mangya.tech" />
        <meta name="description" content="Convert ✍️ length from foot to metre, metre to centimeter. Liquids from litre to millilitre. Temperature ℃℉ from fahrenheit to celsius, kelvin to celsius." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mangya.tech/convert" />
        <meta property="og:title" content="Online converter | Mangya.tech" />
        <meta property="og:description" content="Convert ✍️ length from foot to metre, metre to centimeter. Liquids from litre to millilitre. Temperature ℃℉ from fahrenheit to celsius, kelvin to celsius." />
        <meta property="og:image" content="https://mangya.tech/illustration.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mangya.tech/convert" />
        <meta property="twitter:title" content="Online converter | Mangya.tech" />
        <meta property="twitter:description" content="Convert ✍️ length from foot to metre, metre to centimeter. Liquids from litre to millilitre. Temperature ℃℉ from fahrenheit to celsius, kelvin to celsius." />
        <meta property="twitter:image" content="https://mangya.tech/illustration.svg" />
      </Helmet>
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
