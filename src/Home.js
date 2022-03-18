import React from "react";
import Box from "@mui/material/Box";
import { Grid, List, Typography } from "@mui/material";
import pwa from "../public/pwa.svg";
import security from "../public/security.svg";
import in_no_time from "../public/in_no_time.svg";
import share_link from "../public/share_link.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ListButton from "./Components/ListButton";

export default function Home() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={10}
          padding={5}
        >
          <Grid item xs={12} sm={6}>
            <Typography color={"text.primary"} variant="h1" fontWeight={500}>
              Everyday tools online.
            </Typography>
            <Typography color={"text.secondary"} variant="body1">
              We provide all tools online &amp; that too for free.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={pwa} width="100%" height="100%" alt="pwa image" />
          </Grid>
        </Grid>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="nav"
          aria-labelledby="listed-tools"
        >
          <ListButton
            primary={"Calculators"}
            secondary={
              "Caluclate academic, health, time and get perfect results"
            }
            href={"/calculator"}
            icon={<FontAwesomeIcon icon={solid("calculator")} size={"lg"} />}
          />
          <ListButton
            primary={"Conversion"}
            secondary={"Convert every length from one to another"}
            href="/conversion"
            icon={<FontAwesomeIcon icon={solid("gear")} size={"lg"} />}
          />
          <ListButton
            primary={"Hashing"}
            secondary={"Get a hash for your text and files"}
            href="/hash"
            icon={<FontAwesomeIcon icon={solid("lock")} size={"lg"} />}
          />
          <ListButton
            primary={"Emojis"}
            secondary={"Get all Apple and text based emoticons"}
            href="/emoji"
            icon={<FontAwesomeIcon icon={solid("face-grin")} size={"lg"} />}
          />
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
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={{ xs: 10, sm: 15 }}
          padding={5}
        >
          <Grid item xs={12} sm={6} order={{ xs: 1 }}>
            <img src={in_no_time} width="100%" height="100%" alt="pwa image" />
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 2 }}>
            <Typography color={"text.primary"} variant="h2">
              Blazing process
            </Typography>
            <Typography color={"text.secondary"} variant="body1">
              Get results within a few minutes, so you don't have to worry about
              the last minute assingment due.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 4, sm: 3 }}>
            <Typography color={"text.primary"} variant="h2">
              Client side working
            </Typography>
            <Typography color={"text.secondary"} variant="body1">
              All process happens inside your browser. No files are sent to
              server until you've opted to share your link
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 3, sm: 4 }}>
            <img src={security} width="100%" height="100%" alt="pwa image" />
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 5 }}>
            <img src={share_link} width="100%" height="100%" alt="pwa image" />
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 6 }}>
            <Typography color={"text.primary"} variant="h2">
              Share your result
            </Typography>
            <Typography color={"text.secondary"} variant="body1">
              Don't keep your result to yourself. Generate a link, copy and
              share your results.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
