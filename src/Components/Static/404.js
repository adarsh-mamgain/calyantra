import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import error from "../../../public/error404.svg";

export default function PageNotFound() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h1">ERROR 404</Typography>
          <img src={error} />
        </Grid>
      </Grid>
    </Box>
  );
}
