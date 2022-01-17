import React from "react";
import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <AppBar sx={{ px: 20 }} position="static" color="grey">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="body1">&#169; 2021 Calyantra - coded with ❤️</Typography>
          <Link sx={{ mx: 2 }} color={"black"} underline="none" variant="body2" href="/privacy">Privacy</Link>
          <Link sx={{ mx: 2 }} color={"black"} underline="none" variant="body2" href="/terms-and-conditions">Terms &#38; conditions</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
