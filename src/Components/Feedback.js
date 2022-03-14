import React from "react";
import {
  Box,
  TextField,
  Typography,
  Alert,
  MenuItem,
  Button,
  Snackbar,
  Grid,
} from "@mui/material";
import { useLocation } from "react-router";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { ref, update } from "firebase/database";
import database from "./Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
  const [form, setForm] = React.useState({
    type: "feedback",
    message: "",
    email: "",
  });
  const changeType = (event) => {
    setForm({ ...form, type: event.target.value });
  };
  const changeEmail = (event) => {
    setForm({ ...form, email: event.target.value });
  };
  const changeMessage = (event) => {
    setForm({ ...form, message: event.target.value });
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signInAnonymously(auth).catch((error) => {
        console.log(error);
      });
    }
  });

  const location = useLocation().pathname;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data["/" + form.type + "/" + location.replaceAll("/", "") + "/"] = {
      email: form.email,
      message: form.message,
      url: `https://calyantra.com${location}`,
      date: new Date().toLocaleDateString(),
    };
    update(ref(database), data).catch((error) => {
      console.log(error);
    });
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box paddingY={1} marginY={1}>
      <Grid
        width={{ sx: "100%", sm: "75%" }}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"background.paper"}
        borderRadius={2}
        padding={2}
        margin={"auto"}
      >
        <Grid item xs={12} sm={6}>
          <Typography color={"text.primary"} variant="h2">
            Write to us 😊
          </Typography>
          <Typography color={"text.secondary"}>
            We would love to hear from you
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={(e) => handleSubmit(e)} method="POST">
            <TextField
              hiddenLabel
              color="secondary"
              required
              size="small"
              sx={{ width: "100%" }}
              variant="filled"
              id="filled-select-contact-type"
              value={form.type}
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
              color="secondary"
              required
              size="small"
              sx={{ width: "100%" }}
              variant="filled"
              id="filled-email"
              placeholder="name@example.com"
              value={form.email}
              onChange={(e) => changeEmail(e)}
              type={"email"}
            />
            <TextField
              hiddenLabel
              color="secondary"
              required
              multiline
              rows={4}
              size="small"
              sx={{ width: "100%" }}
              variant="filled"
              id="filled-message"
              placeholder="Your message ..."
              value={form.message}
              onChange={(e) => changeMessage(e)}
            />
            <Button
              color="secondary"
              endIcon={<FontAwesomeIcon icon={solid("paper-plane")} />}
              variant="contained"
              type="submit"
              sx={{ width: "100%" }}
            >
              Submit
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity="success"
                variant="filled"
              >
                Thank you for your response
              </Alert>
            </Snackbar>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
