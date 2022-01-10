import React from "react";
import PageNotFound from "../Components/Static/404";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import AppleEmoji from "./AppleEmoji";
import TextEmoji from "./TextEmoji";

export function EmojiHome() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Helmet>
        <title>Online Emoji list | Mangya.tech</title>
        <meta name="title" content="Online Emoji list | Mangya.tech" />
        <meta name="description" content="Get all Apple and text based emoticons at one place" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mangya.tech/hash" />
        <meta property="og:title" content="Online Emoji list | Mangya.tech" />
        <meta property="og:description" content="Get all Apple 😊 and text :) based emoticons at one place" />
        <meta property="og:image" content="https://mangya.tech/illustration.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mangya.tech/hash" />
        <meta property="twitter:title" content="Online Emoji list | Mangya.tech" />
        <meta property="twitter:description" content="Get all Apple and text based emoticons at one place" />
        <meta property="twitter:image" content="https://mangya.tech/illustration.svg" />
      </Helmet>
      <Link underline="none" to="apple">
        <Typography variant="h2">Apple</Typography>
      </Link>
      <Link underline="none" to="text">
        <Typography variant="h2">Text</Typography>
      </Link>
    </Box>
  )
}

export default function Emoji() {
  return (
    <Routes>
      <Route path="" element={<EmojiHome />} />
      <Route path="/apple" element={<AppleEmoji />} />
      <Route path="/text" element={<TextEmoji />} />
    </Routes>
  )
}