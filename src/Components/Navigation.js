import React from "react";
import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";

export default function Navigation() {
  return (
    <Box>
      <AppBar sx={{ px: 20 }} position="static">
        <Toolbar>
          <Link href="/"><Typography color={"white"} variant="h6">Online Tools</Typography></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
