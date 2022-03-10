import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import GetHelmet from "../Components/GetHelmet";

export default function HashHome() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online Hashing | Calyantra.com"
          description="Hash 🔐 your text or files 🗂 to MD5, SHA1, SHA224, SHA256, SHA384 and SHA512."
          url={useLocation().pathname}
        />
        <Typography align="center" color={"text.primary"} variant="h1">
          Hash text or files
        </Typography>
        <Link underline="none" to="md5">
          <Typography>MD5</Typography>
        </Link>
        <Link underline="none" to="sha1">
          <Typography>SHA1</Typography>
        </Link>
        <Link underline="none" to="sha224">
          <Typography>SHA224</Typography>
        </Link>
        <Link underline="none" to="sha256">
          <Typography>SHA256</Typography>
        </Link>
        <Link underline="none" to="sha384">
          <Typography>SHA384</Typography>
        </Link>
        <Link underline="none" to="sha512">
          <Typography>SHA512</Typography>
        </Link>
      </Box>
    </Box>
  );
}
