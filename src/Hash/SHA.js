import React from "react";
import Feedback from "../Components/Feedback";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  // Divider,
  Stack,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useLocation } from "react-router-dom";
import { MD5, SHA1, SHA224, SHA256, SHA384, SHA512 } from "crypto-js";
import GetRating from "../Components/GetRating";
import GetTimeline from "../Components/GetTimeline";
import GetHelmet from "../Components/GetHelmet";

export default function Hashing() {
  const type = useLocation();
  const [text, setText] = React.useState();
  const [copy, setCopy] = React.useState(false);

  const changeText = (event) => {
    if (type.pathname == "/hash/md5") {
      setText(MD5(event.target.value));
    } else if (type.pathname == "/hash/sha1") {
      setText(SHA1(event.target.value));
    } else if (type.pathname == "/hash/sha224") {
      setText(SHA224(event.target.value));
    } else if (type.pathname == "/hash/sha256") {
      setText(SHA256(event.target.value));
    } else if (type.pathname == "/hash/sha384") {
      setText(SHA384(event.target.value));
    } else if (type.pathname == "/hash/sha512") {
      setText(SHA512(event.target.value));
    } else {
      setText(
        "Uh Oh! Something went wrong.\nPlease inform us using complaint form."
      );
    }
  };

  // const [fileName, setFileName] = React.useState();

  // const handleFile = (event) => {
  //   var file = event.target.files[0];
  //   console.log(event);
  //   console.log(file);
  //   setFileName(file.name);
  //   var reader = new FileReader();
  //   var file = event.target.files[0];
  //   var reader = new FileReader();
  //   reader.onload = function (event) {
  //     var data = event.target.result;
  //     var encrypted = SHA256(data);
  //     console.log("encrypted: " + encrypted);
  //   };
  //   reader.readAsBinaryString(file);
  //   if (type.pathname == "/hash/md5") {
  //     reader.onload = function () {
  //       var data = event.target.result;
  //       setText(MD5(data));
  //     };
  //     console.log(text);
  //   } else if (type.pathname == "/hash/sha1") {
  //     reader.onload = function () {
  //       var data = event.target.result;
  //       setText(SHA1(data));
  //     };
  //     console.log(text);
  //   } else if (type.pathname == "/hash/sha224") {
  //     reader.onload = function () {
  //       var data = event.target.result;
  //       setText(SHA224(data));
  //     };
  //     console.log(text);
  //   } else if (type.pathname == "/hash/sha256") {
  //     reader.onload = function () {
  //       var data = event.target.result;
  //       setText(SHA256(data));
  //     };
  //     console.log(text);
  //   } else if (type.pathname == "/hash/sha384") {
  //     reader.onload = function () {
  //       var data = event.target.result;
  //       setText(SHA384(data));
  //     };
  //     console.log(text);
  //   } else if (type.pathname == "/hash/sha512") {
  //     reader.onload = function () {
  //       var data = event.target.result;
  //       setText(SHA512(data));
  //     };
  //     console.log(text);
  //   } else {
  //     setText(
  //       "Uh Oh! Something went wrong.\nPlease inform us using complaint form."
  //     );
  //   }
  //   reader.readAsBinaryString(file);
  // };

  // const addFiles = (newFiles) => {
  //   setFiles(...files, newFiles);
  // };

  // const deleteFiles = (remainingFiles) => {
  //   setFiles(remainingFiles);
  // };

  const copyHash = () => {
    setCopy(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const steps = ["Input or paste text", "Match or copy hash"];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Hashing | Calyantra.com"
          description="Hash 🔐 your text or files 🗂 to MD5, SHA1, SHA224, SHA256, SHA384 and SHA512."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            Hash Generator
          </Typography>
          <Typography
            align="center"
            color={"text.secondary"}
            variant="body1"
            sx={{ mb: 3 }}
          >
            Convert your text into accurate hash code
          </Typography>
        </Box>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"background.paper"}
          borderRadius={2}
          padding={2}
        >
          <Grid item xs={12}>
            <TextField
              hiddenLabel
              required
              multiline
              rows={4}
              sx={{ width: "100%" }}
              variant="filled"
              id="filled-message"
              placeholder="Enter your text here..."
              onChange={(e) => changeText(e)}
            />
          </Grid>
          {/* <Divider orientation="vertical" variant="middle" flexItem>
            OR
          </Divider>
          <Grid item md={5} textAlign="center">
            <Button variant="contained" size="large" component="label">
              Upload File
              <input type="file" onChange={(e) => handleFile(e)} hidden />
            </Button>
            <Box>
              <Typography component={"span"}>
                <strong>Files: </strong>
                {fileName}
              </Typography>
            </Box>
          </Grid> */}
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography color={"text.primary"}>OUTPUT:</Typography>
              <Button
                variant="contained"
                startIcon={<ContentCopyIcon />}
                onClick={copyHash}
              >
                {copy ? "Copied" : "Copy"}
              </Button>
            </Stack>
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
          </Grid>
        </Grid>
        <GetTimeline getSteps={steps} />
        <GetRating />
        <Feedback />
      </Box>
    </Box>
  );
}
