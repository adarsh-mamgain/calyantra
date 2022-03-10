import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import GetHelmet from "../Components/GetHelmet";

export default function EmojiHome() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online Emoji 😁😂🥺 | Calyantra.com"
          description="Get all Apple and text based emoticons at one place."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">Emoticons</Typography>
        <Link underline="none" to="apple">
          <Typography>Apple</Typography>
        </Link>
        <Link underline="none" to="text">
          <Typography>Text</Typography>
        </Link>
      </Box>
    </Box>
  );
}
