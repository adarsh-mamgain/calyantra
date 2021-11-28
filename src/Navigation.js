import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
