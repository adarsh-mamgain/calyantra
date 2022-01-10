import React from "react";
import { AppBar, Toolbar, Box, Typography, Link, Badge } from "@mui/material";

export default function Navigation() {
  return (
    <Box>
      <AppBar sx={{ px: 20 }} position="static">
        <Toolbar>
          <Link href="/">
            <Badge color="secondary" badgeContent={"BETA"}>
              <Typography color={"white"} variant="h6">
                QuickTool
              </Typography>
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
