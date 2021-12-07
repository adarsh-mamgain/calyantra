import React from "react";
import Crumbs from "../Crumbs";
import Feedback from "../Sidebar/Feedback";
import Donate from "../Sidebar/Donate";
import { Grid, Box, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { MD5, SHA1, SHA224, SHA256, SHA384, SHA512 } from "crypto-js";

export default function SHA() {
  const { type } = useParams();
  const [text, setText] = React.useState();

  const changeText = (event) => {
    if (type == "md5") {
      setText(MD5(event.target.value));
    } else if (type == "sha1") {
      setText(SHA1(event.target.value));
    } else if (type == "sha224") {
      setText(SHA224(event.target.value));
    } else if (type == "sha256") {
      setText(SHA256(event.target.value));
    } else if (type == "sha384") {
      setText(SHA384(event.target.value));
    } else if (type == "sha512") {
      setText(SHA512(event.target.value));
    } else {
      setText(
        "Uh Oh! Something went wrong.\nPlease inform us using complaint form."
      );
    }
  };
  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Crumbs />
      <Typography variant="h2">SHA Hash Calculator</Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} sm={9}>
          <Box>
            <TextField
              hiddenLabel
              required
              multiline
              rows={4}
              size="small"
              sx={{ width: "100%" }}
              variant="filled"
              id="filled-message"
              onChange={(e) => changeText(e)}
            />
            <TextField
              hiddenLabel
              multiline
              rows={4}
              size="small"
              sx={{ width: "100%" }}
              variant="filled"
              id="readonly-message"
              value={text}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={0} sm={3} bgcolor="grey">
          <Feedback />
          <Donate />
          <Typography variant="h1">ADS</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
