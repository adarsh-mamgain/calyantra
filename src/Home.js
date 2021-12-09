import React from "react";
import Box from "@mui/material/Box";
import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Helmet } from "react-helmet";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import CalculateIcon from "@mui/icons-material/Calculate";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import LoopIcon from "@mui/icons-material/Loop";

export default function Home() {
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Online calculators, convertors, editors | Mangya.tech</title>
        <meta name="title" content="Online calculators, convertors, editors | Mangya.tech" />
        <meta name="description" content="Calculate your GPAs, Interest, BMI. Convert length, heat, liquids. Edit your PDF files, hash them, encrypt." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mangya.tech" />
        <meta property="og:title" content="Online calculators, convertors, editors | Mangya.tech" />
        <meta property="og:description" content="Calculate your GPAs, Interest, BMI. Convert length, heat, liquids. Edit your PDF files, hash them, encrypt." />
        <meta property="og:image" content="https://mangya.tech/illustration.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mangya.tech" />
        <meta property="twitter:title" content="Online calculators, convertors, editors | Mangya.tech" />
        <meta property="twitter:description" content="Calculate your GPAs, Interest, BMI. Convert length, heat, liquids. Edit your PDF files, hash them, encrypt." />
        <meta property="twitter:image" content="https://mangya.tech/illustration.svg" />
      </Helmet>
      <List
        sx={{
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        component="nav"
        aria-labelledby="listed-tools"
      >
        <ListItemButton
          sx={{ width: "33%" }}
          component={Link}
          href="/convert"
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Conversion" secondary="Convert every length from one to another" />
        </ListItemButton>
        <ListItemButton
          sx={{ width: "33%" }}
          component={Link}
          href="/calculator"
        >
          <ListItemIcon>
            <CalculateIcon />
          </ListItemIcon>
          <ListItemText
            primary="Calculators"
            secondary="Caluclate academic, health, time and get perfect results"
          />
        </ListItemButton>
        <ListItemButton sx={{ width: "33%" }} component={Link} href="/hash">
          <ListItemIcon>
            <EnhancedEncryptionIcon />
          </ListItemIcon>
          <ListItemText
            primary="Hashing"
            secondary="Get a hash for your text and files"
          />
        </ListItemButton>
        <ListItemButton sx={{ width: "33%" }} component={Link} href="/generate">
          <ListItemIcon>
            <LoopIcon />
          </ListItemIcon>
          <ListItemText
            primary="Generate"
            secondary="Create random passwords, paragraphs, names"
          />
        </ListItemButton>
        <ListItemButton sx={{ width: "33%" }} component={Link} href="/pdf">
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="PDF" />
        </ListItemButton>
        <ListItemButton
          sx={{ width: "33%" }}
          component={Link}
          href="/text-format"
        >
          <ListItemIcon>
            <TextFormatIcon />
          </ListItemIcon>
          <ListItemText primary="Text formatting/ editor" />
        </ListItemButton>
        <ListItemButton sx={{ width: "33%" }} component={Link} href="/code">
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Code formatter" />
        </ListItemButton>
      </List>
    </Box>
  );
}
