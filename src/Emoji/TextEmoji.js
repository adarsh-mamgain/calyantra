import React from "react";
import { Box, Grid, Button, Tooltip, Typography } from "@mui/material";
import Feedback from "../Components/Feedback";
import GetHelmet from "../Components/GetHelmet";
import { useLocation } from "react-router-dom";
import GetTimeline from "../Components/GetTimeline";
import GetRating from "../Components/GetRating";

const emoticons = [
  { emoji: ":)", name: "happy" },
  { emoji: ":(", name: "sad" },
  { emoji: ":')", name: "I'm fine" },
  { emoji: ":'(", name: "crying" },
  { emoji: "':)", name: "embarassed" },
  { emoji: "-_-", name: "mad" },
  { emoji: "^_^", name: "okay" },
  { emoji: "^~^", name: "UwU" },
  { emoji: "*_*", name: "shocked" },
  { emoji: "o_o", name: "cute" },
  { emoji: "o_o", name: "cute" },
  { emoji: "0_0", name: "confused" },
  { emoji: "ಠ_ಠ", name: "stressed" },
  { emoji: "¯\\_(ツ)_/¯", name: "idk" },
  { emoji: "( ͡° ͜ʖ ͡°)", name: "smirk" },
  { emoji: "ಠ_ಠ", name: "smirk", tag: ["angry"] },
  { emoji: "ლ(ಠ益ಠ)ლ", name: "smirk", tag: ["angry"] },
  { emoji: "(ง’̀-‘́)ง", name: "smirk", tag: ["angry"] },
  { emoji: "(ಠ_ಠ)", name: "smirk", tag: ["angry"] },
  { emoji: "(ᵔᴥᵔ)", name: "smirk", tag: ["animal"] },
  { emoji: "(=^ェ^=)", name: "smirk", tag: ["animal"] },
  { emoji: "ʕ•ᴥ•ʔ", name: "smirk", tag: ["animal"] },
  { emoji: "（・⊝・）", name: "smirk", tag: ["animal"] },
  { emoji: "(✿◠‿◠)", tag: ["happy"] },
  { emoji: "(｡◕‿◕｡)", tag: ["happy"] },
  { emoji: "~(˘▾˘~)", tag: ["happy"] },
  { emoji: "(. ❛ ᴗ ❛.)", tag: ["happy"] },
  { emoji: "｡^‿^｡", tag: ["happy"] },
  { emoji: "( ͡ᵔ ͜ʖ ͡ᵔ )", tag: ["happy"] },
  { emoji: "☉_☉", tag: ["wtf"] },
  { emoji: "o_O", tag: ["wtf"] },
  { emoji: "(¬_¬)", tag: ["wtf"] },
];

export default function TextEmoji() {
  const [opened, setOpen] = React.useState([]);

  const copyEmote = (event, index) => {
    let text = event.target.childNodes[0].data;
    navigator.clipboard.writeText(text);
    let copy = [...opened];
    copy[index] = true;
    setOpen(copy);
    setTimeout(() => {
      let original = [...opened];
      original[index] = false;
      setOpen(original);
    }, 1000);
  };

  const steps = ["Search your emoji", "Copy it to the clipboard"];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Text Emojis :) *_* ;-; | Calyantra.com"
          description="Get all Apple and text based emoticons at one place."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            Apple Emoji
          </Typography>
          <Typography
            align="center"
            color={"text.secondary"}
            variant="body1"
            sx={{ mb: 3 }}
          >
            All Apple emoticons at one place
          </Typography>
        </Box>
        <Grid container justifyContent="center"  alignItems={"center"}>
          {emoticons.map(
            (options, index) => (
              opened.push(false),
              (
                <Box>
                  <Tooltip
                    open={opened[index]}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    placement="top"
                    title="Copied!"
                  >
                    <Button
                      key={index}
                      sx={{ width: 120, height: 120, fontSize: { xs: 15, sm: 20 } }}
                      onClick={(e) => copyEmote(e, index)}
                    >
                      {options.emoji}
                    </Button>
                  </Tooltip>
                </Box>
              )
            )
          )}
        </Grid>
        <GetTimeline getSteps={steps} />
        <GetRating />
        <Feedback />
      </Box>
    </Box>
  );
}
