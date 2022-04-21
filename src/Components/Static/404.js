import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import error from "../../../public/error404.svg";

export default function PageNotFound() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: 20 }}>
        <Grid sx={{ py: 10 }} container align="center">
          <Grid item xs={12} sm={12}>
            <Box marginBottom={2}>
              <img
                src={error}
                width="100%"
                height="100%"
                alt="error 404 image"
              />
            </Box>
            <Typography color={"text.primary"} variant="body1">
              We couldn't find the page you are looking for :')
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
