import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box bgcolor={"background.paper"}>
      <Box sx={{ px: 20 }}>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Grid item xs={6} md={4}>
            <Typography color={"text.primary"} sx={{ fontSize: 20 }}>
              Calyantra
            </Typography>
            <Typography color={"text.secondary"} variant="body1">
              CalYantra offers free online calculators, converter, editors and
              many other useful tools to assist you in solving your problems.
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography color={"text.primary"} variant="body1">
              Most used tools
            </Typography>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/calculator/gpa"
            >
              <Typography>GPA calculator</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/calculator/simple-interest"
            >
              <Typography>Simple Interest calculator</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/calculator/simple-calculator"
            >
              <Typography>Simple calculator</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/emoji/apple"
            >
              <Typography>Apple emoticons</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/emoji/text"
            >
              <Typography>Text emoticons</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography color={"text.primary"}>Company</Typography>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/privacy"
            >
              <Typography>Privacy</Typography>
            </Link>
            <Link
              color={"text.secondary"}
              underline="hover"
              variant="body2"
              href="/terms-and-conditions"
            >
              <Typography>Terms &#38; conditions</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={8}>
            <Typography color={"text.primary"} variant="body1">
              &#169; 2021 Calyantra - coded with ❤️
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
