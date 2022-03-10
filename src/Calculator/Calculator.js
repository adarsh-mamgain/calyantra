import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import GetHelmet from "../Components/GetHelmet";

export default function CalculatorHome() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online calculators | Calyantra.com"
          description="Calculate your GPA, Simple Interest and Compound Interest."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Financial and Mathematical calculators
        </Typography>
        <Link underline="none" to="gpa">
          <Typography>GPA</Typography>
        </Link>
        <Link underline="none" to="simple-interest">
          <Typography>Simple Interest</Typography>
        </Link>
        <Link underline="none" to="compound-interest">
          <Typography>Compound Interest</Typography>
        </Link>
        <Link underline="none" to="simple-calculator">
          <Typography>Simple Calculator</Typography>
        </Link>
      </Box>
    </Box>
  );
}
