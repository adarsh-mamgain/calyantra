import React from "react";
import Crumbs from "../Components/Crumbs";
import Feedback from "../Components/Feedback";
// import Donate from "../Components/Donate";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { MD5, SHA1, SHA224, SHA256, SHA384, SHA512 } from "crypto-js";

export function TextSHA() {
  const type = useLocation();
  const [text, setText] = React.useState();

  const changeText = (event) => {
    if (type.pathname == "/hash/text-md5") {
      setText(MD5(event.target.value));
    } else if (type.pathname == "/hash/text-sha1") {
      setText(SHA1(event.target.value));
    } else if (type.pathname == "/hash/text-sha224") {
      setText(SHA224(event.target.value));
    } else if (type.pathname == "/hash/text-sha256") {
      setText(SHA256(event.target.value));
    } else if (type.pathname == "/hash/text-sha384") {
      setText(SHA384(event.target.value));
    } else if (type.pathname == "/hash/text-sha512") {
      setText(SHA512(event.target.value));
    } else {
      setText(
        "Uh Oh! Something went wrong.\nPlease inform us using complaint form."
      );
    }
  };
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: 20 }}>
        <Crumbs />
        <Typography color={"text.primary"} variant="h1">
          SHA Hash Calculator
        </Typography>
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
          <Grid item xs={0} sm={3}>
            <Feedback />
            {/* <Donate /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export function FileSHA() {
  const type = useLocation();
  const [text, setText] = React.useState();

  const changeText = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    if (type.pathname == "/hash/file-md5") {
      reader.onload = function (event) {
        var data = event.target.result;
        setText(MD5(data));
      };
    } else if (type.pathname == "/hash/file-sha1") {
      reader.onload = function (event) {
        var data = event.target.result;
        setText(SHA1(data));
      };
    } else if (type.pathname == "/hash/file-sha224") {
      reader.onload = function (event) {
        var data = event.target.result;
        setText(SHA224(data));
      };
    } else if (type.pathname == "/hash/file-sha256") {
      reader.onload = function (event) {
        var data = event.target.result;
        setText(SHA256(data));
      };
    } else if (type.pathname == "/hash/file-sha384") {
      reader.onload = function (event) {
        var data = event.target.result;
        setText(SHA384(data));
      };
    } else if (type.pathname == "/hash/file-sha512") {
      reader.onload = function (event) {
        var data = event.target.result;
        setText(SHA512(data));
      };
    } else {
      setText(
        "Uh Oh! Something went wrong.\nPlease inform us using complaint form."
      );
    }
    reader.readAsBinaryString(file);
  };
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: 20 }}>
        <Crumbs />
        <Typography color={"text.primary"} variant="h1">
          SHA Hash Calculator
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={9}>
            <Box>
              <Box>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ height: 100, width: 100 + "%" }}
                >
                  Upload File
                  <input type="file" onChange={(e) => changeText(e)} hidden />
                </Button>
              </Box>
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
          <Grid item xs={0} sm={3}>
            <Feedback />
            {/* <Donate /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
