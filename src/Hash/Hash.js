import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

export default function HashHome() {
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
      <h1>Text</h1>
      <Link underline="none" to="text-md5">
        <Typography>MD5</Typography>
      </Link>
      <Link underline="none" to="text-sha1">
        <Typography>SHA1</Typography>
      </Link>
      <Link underline="none" to="text-sha224">
        <Typography>SHA224</Typography>
      </Link>
      <Link underline="none" to="text-sha256">
        <Typography>SHA256</Typography>
      </Link>
      <Link underline="none" to="text-sha384">
        <Typography>SHA384</Typography>
      </Link>
      <Link underline="none" to="text-sha512">
        <Typography>SHA512</Typography>
      </Link>
      <h1>File</h1>
      <Link underline="none" to="file-md5">
        <Typography>MD5</Typography>
      </Link>
      <Link underline="none" to="file-sha1">
        <Typography>SHA1</Typography>
      </Link>
      <Link underline="none" to="file-sha224">
        <Typography>SHA224</Typography>
      </Link>
      <Link underline="none" to="file-sha256">
        <Typography>SHA256</Typography>
      </Link>
      <Link underline="none" to="file-sha384">
        <Typography>SHA384</Typography>
      </Link>
      <Link underline="none" to="file-sha512">
        <Typography>SHA512</Typography>
      </Link>
    </Box>
  );
}
