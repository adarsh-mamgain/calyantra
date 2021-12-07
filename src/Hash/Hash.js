import React from "react";
import SHA from "./SHA";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export function HashHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Link underline="none" to="md5">
        <Typography variant="h2">MD5</Typography>
      </Link>
      <Link underline="none" to="sha1">
        <Typography variant="h2">SHA1</Typography>
      </Link>
      <Link underline="none" to="sha224">
        <Typography variant="h2">SHA224</Typography>
      </Link>
      <Link underline="none" to="sha256">
        <Typography variant="h2">SHA256</Typography>
      </Link>
      <Link underline="none" to="sha384">
        <Typography variant="h2">SHA384</Typography>
      </Link>
      <Link underline="none" to="sha512">
        <Typography variant="h2">SHA512</Typography>
      </Link>
    </Box>
  );
}

export default function Calculator() {
  return (
    <Routes>
      <Route path="" element={<HashHome />} />
      <Route path="/:type" element={<SHA />} />
    </Routes>
  );
}
