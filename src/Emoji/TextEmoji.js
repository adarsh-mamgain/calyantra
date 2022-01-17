import React from "react";
import { Box, Grid, Button, Tooltip } from "@mui/material";
import Feedback from "../Components/Feedback";
// import Donate from "../Components/Donate";
import Crumbs from "../Components/Crumbs";

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
      let original = [...opened]
      original[index] = false;
      setOpen(original);
    }, 1000);
  };

  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Crumbs />
      <Grid container justifyContent="center">
        {emoticons.map(
          (options, index) => (
            opened.push(false),
            (
              <div>
                <Tooltip
                  open={opened[index]}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="top"
                  title="Copied!"
                >
                  <Button key={index} sx={{ width: 120, height: 120, fontSize: 20 }} onClick={(e) => copyEmote(e, index)}>
                    {options.emoji}
                  </Button>
                </Tooltip>
              </div>
            )
          )
        )}
      </Grid>
    </Box>
  );
}
