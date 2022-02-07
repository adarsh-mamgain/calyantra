import React from "react";
import { Box, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import GrainIcon from "@mui/icons-material/Grain";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function Crumbs() {
  return (
    <Box>
      <Breadcrumbs sx={{ py: 3 }} aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/calculator"
        >
          <CalculateIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Calculator
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          GPA
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
