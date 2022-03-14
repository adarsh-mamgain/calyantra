import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import GetHelmet from "../Components/GetHelmet";

export default function ConversionHome() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online convertors | Calyantra.com"
          description="Convert length 📏, liquids 🧪 and temperature 🌡 into different metric units."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Convertors
        </Typography>
        <Link underline="none" to="length">
          <Typography>Length</Typography>
        </Link>
        <Link underline="none" to="litre">
          <Typography>Litre</Typography>
        </Link>
        <Link underline="none" to="temperature">
          <Typography>Temperature</Typography>
        </Link>
      </Box>
    </Box>
  );
}
