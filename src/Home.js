import React from "react";
import Box from "@mui/material/Box";
import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import CalculateIcon from "@mui/icons-material/Calculate";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import LoopIcon from "@mui/icons-material/Loop";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Home() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: 20 }}>
        <Typography color={"text.primary"} variant="h1">
          Free online tools
        </Typography>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
          component="nav"
          aria-labelledby="listed-tools"
        >
          <ListItemButton
            sx={{ width: "20%", m: 1, bgcolor: "background.paper" }}
            component={Link}
            href="/calculator"
          >
            <ListItemIcon>
              <CalculateIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component={"span"}
                  color={"text.primary"}
                  variant="body1"
                >
                  Calculators
                </Typography>
              }
              secondary="Caluclate academic, health, time and get perfect results"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ width: "20%", m: 1, bgcolor: "background.paper" }}
            component={Link}
            href="/conversion"
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component={"span"}
                  color={"text.primary"}
                  variant="body1"
                >
                  Conversion
                </Typography>
              }
              secondary="Convert every length from one to another"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ width: "20%", m: 1, bgcolor: "background.paper" }}
            component={Link}
            href="/hash"
          >
            <ListItemIcon>
              <EnhancedEncryptionIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component={"span"}
                  color={"text.primary"}
                  variant="body1"
                >
                  Hashing
                </Typography>
              }
              secondary="Get a hash for your text and files"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ width: "20%", m: 1, bgcolor: "background.paper" }}
            component={Link}
            href="/emoji"
          >
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component={"span"}
                  color={"text.primary"}
                  variant="body1"
                >
                  Emojis
                </Typography>
              }
              secondary="Get all Apple and text based emoticons"
            />
          </ListItemButton>
          {/* <ListItemButton component={Link} href="/generate">
          <ListItemIcon>
            <LoopIcon />
          </ListItemIcon>
          <ListItemText
            primary="Generate"
            secondary="Create random passwords, paragraphs, names"
          />
        </ListItemButton> */}
          {/* <ListItemButton component={Link} href="/pdf">
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="PDF" />
        </ListItemButton> */}
          {/* <ListItemButton component={Link} href="/text-format">
            <ListItemIcon>
              <TextFormatIcon />
            </ListItemIcon>
            <ListItemText primary="Text formatting/ editor" />
          </ListItemButton>
          <ListItemButton component={Link} href="/code">
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Code formatter" />
        </ListItemButton> */}
        </List>
        <Typography color={"text.primary"} variant="h2" align="center">
          About Us
        </Typography>
        <Typography color={"text.secondary"} variant="body1">
          Free Tools! Yes, we provide all tools for free online and that
          everything on the client side in your browser.
        </Typography>
        <Typography color={"text.secondary"} variant="body1">
          Share your results and files by creating a short URI.{" "}
        </Typography>
        <Typography color={"text.secondary"} variant="body1">
          All files and text are stored locally on your browser. And shared to
          the server only when you opt to do so.
        </Typography>
      </Box>
    </Box>
  );
}
