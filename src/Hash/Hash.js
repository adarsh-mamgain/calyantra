import React from "react";
import SHA from "./SHA";
import PageNotFound from "../Components/Static/404";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

export function HashHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Helmet>
        <title>Online Hashing | Mangya.tech</title>
        <meta name="title" content="Online Hashing | Mangya.tech" />
        <meta name="description" content="Hash 🔐 your text or files 🗂 to MD5, SHA1, SHA224, SHA256, SHA384 and SHA512." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mangya.tech/hash" />
        <meta property="og:title" content="Online Hashing | Mangya.tech" />
        <meta property="og:description" content="Hash 🔐 your text or files 🗂 to MD5, SHA1, SHA224, SHA256, SHA384 and SHA512." />
        <meta property="og:image" content="https://mangya.tech/illustration.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mangya.tech/hash" />
        <meta property="twitter:title" content="Online Hashing | Mangya.tech" />
        <meta property="twitter:description" content="Hash 🔐 your text or files 🗂 to MD5, SHA1, SHA224, SHA256, SHA384 and SHA512." />
        <meta property="twitter:image" content="https://mangya.tech/illustration.svg" />
      </Helmet>
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
      <Route path="/md5" element={<SHA />} />
      <Route path="/sha1" element={<SHA />} />
      <Route path="/sha224" element={<SHA />} />
      <Route path="/sha256" element={<SHA />} />
      <Route path="/sha384" element={<SHA />} />
      <Route path="/sha512" element={<SHA />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
