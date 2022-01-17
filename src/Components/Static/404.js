import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import error from "../../../public/error404.svg";

export default function PageNotFound() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Grid container align="center" spacing={1}>
        <Grid item xs={12} sm={12}>
          <img src={error} margin="10px" />
          <Typography>We couldn't find the page you are looking for :')</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
