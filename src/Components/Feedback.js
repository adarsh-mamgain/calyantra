import React from "react";
var axios = require("axios");
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
    var data = JSON.stringify({
      "query_string": `INSERT INTO \"adarsh-mamgain/Tools-Website\".\"request\" VALUES (${message}, ${new Date().toLocaleString()}, '00:00:00 +05:30', 'https://calyantra.com${location.pathname}');`
    });

    var config = {
      method: 'POST',
      url: 'https://api.bit.io/api/v1beta/query/',
      headers: { 
        'Authorization': 'Bearer TQ57_fg5PRG6scw42U2knv54uXU8', 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      setSubmitMsg("Thank you for your response 😊");
      setOpen(true);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      alert(
        "Uh Oh! Couldn't submit your response :(\nWe are having problems ;("
      );
      console.log(error);
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
