import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

export default function ConversionHome() {
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
      <h1>Length</h1>
      <Link underline="none" to="millimeter-to-centimeter">
        <Typography>Millimeter to Centimeter</Typography>
      </Link>
      <Link underline="none" to="centimeter-to-meter">
        <Typography>Centimeter to Metre</Typography>
      </Link>
      <Link underline="none" to="meter-to-kilometer">
        <Typography>Metre to Killometer</Typography>
      </Link>
      <Link underline="none" to="miles-to-kilometer">
        <Typography>Miles to Killometer</Typography>
      </Link>
      <h1>Litre</h1>
      <Link underline="none" to="millilitre-to-litre">
        <Typography>Millilitre to Litre</Typography>
      </Link>
    </Box>
  );
}
