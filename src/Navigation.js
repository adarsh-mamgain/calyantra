import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

export default function Navigation() {
  return (
    <Box>
      <AppBar sx={{ px: 20 }} position="static">
        <Toolbar>
          <Typography variant="h6">Online Tools</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
