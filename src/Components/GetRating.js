import React from "react";
import { Box, Typography, Stack, Rating } from "@mui/material";
import { useLocation } from "react-router";
import database from "./Database";
import { ref, get, update, increment, child, onValue } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

export default function GetRating() {
  var location = useLocation().pathname.replaceAll("/", "");
  const [details, setDetails] = React.useState({
    ratings: [],
    value: localStorage.getItem(`rating${location}`)
      ? Number(localStorage.getItem(`rating${location}`))
      : 0,
    average: null,
    total: null,
  });

  React.useEffect(
    () => {
      onValue(ref(database, `rating/${location}/`), (snapshot) => {
        var sum = 0;
        var avg = 0;
        if (snapshot.exists()) {
          for (var key in snapshot.val()) {
            sum += snapshot.val()[key];
            avg += key * snapshot.val()[key];
          }
          setDetails({
            ...details,
            average: (avg / sum).toPrecision(2),
            total: sum,
          });
        }
      });
    },
    {
      onlyOnce: true,
    }
  );

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signInAnonymously(auth).catch((error) => {
        console.log(error);
      });
    }
  });

  const uploadRating = (newValue) => {
    if (
      newValue === 1 ||
      newValue === 2 ||
      newValue === 3 ||
      newValue === 4 ||
      newValue === 5
    ) {
      const data = {};
      data["/rating/" + location + "/" + newValue] = increment(1);
      setDetails({ ...details, value: newValue });
      localStorage.setItem(`rating${location}`, newValue);
      console.log(newValue, data, details);
      update(ref(database), data).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <Box paddingY={1} marginY={1}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        paddingY={2}
        marginY={2}
        spacing={2}
      >
        <Typography color={"text.primary"} component={"span"}>
          Rate this tool
        </Typography>
        <Rating
          name="rating"
          value={details.value}
          readOnly={details.value != 0 ? true : false}
          onChange={(event, newValue) => {
            uploadRating(newValue);
          }}
        />
        <Typography color={"text.primary"} component={"span"}>
          <strong>{details.average}</strong> / 5 - {details.total} votes
        </Typography>
      </Stack>
    </Box>
  );
}
/*
! lock the RATING after submitting
! set the localStorage
*/
