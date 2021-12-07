import React from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Typography,
  Collapse,
  Alert,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router";

const subjectList = [
  {
    value: "feedback",
    label: "Feedback",
  },
  {
    value: "request",
    label: "Request",
  },
  {
    value: "complaint",
    label: "Complaint",
  },
];

export default function Feedback() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("feedback");
  const [message, setMessage] = React.useState("");
  const [submitMsg, setSubmitMsg] = React.useState("");

  const changeType = (event) => {
    setType(event.target.value);
  };
  const changeMessage = (event) => {
    setMessage(event.target.value);
  };
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("type", type);
    formdata.append("message", message);
    formdata.append(
      "url",
      `https://onlinetool.herokuapp.com${location.pathname}`
    );
    formdata.append("date", new Date().toLocaleString() + "");
    let reqOptions = {
      url: `https://api.adarshmamgain.repl.co/updateform/${type}`,
      method: "POST",
      data: formdata,
    };

    axios
      .request(reqOptions)
      .then(function (response) {
        setSubmitMsg(response.data);
        setOpen(true);
      })
      .catch((error) => {
        alert(
          "Uh Oh! Couldn't submit your response :(\nWe are having problems ;("
        );
      });
  };

  return (
    <Box>
      <Typography variant="h5">Write to us 😊</Typography>
      <form onSubmit={(e) => handleSubmit(e)} method="POST">
        <TextField
          hiddenLabel
          required
          size="small"
          sx={{ width: "100%" }}
          variant="filled"
          id="filled-select-grade"
          value={type}
          onChange={(e) => changeType(e)}
          select
        >
          {subjectList.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          hiddenLabel
          required
          multiline
          rows={4}
          size="small"
          sx={{ width: "100%" }}
          variant="filled"
          id="filled-message"
          value={message}
          onChange={(e) => changeMessage(e)}
        />
        <Button
          color="secondary"
          endIcon={<SendIcon />}
          variant="contained"
          type="submit"
          sx={{ width: "100%" }}
        >
          Submit
        </Button>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {submitMsg}
          </Alert>
        </Collapse>
      </form>
    </Box>
  );
}
