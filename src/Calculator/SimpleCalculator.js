import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
import Feedback from "../Components/Feedback";
import { useLocation } from "react-router-dom";
import GetHelmet from "../Components/GetHelmet";
import GetTimeline from "../Components/GetTimeline";
import GetRating from "../Components/GetRating";

export default function SimpleCalculator() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  let [calc, setCalc] = React.useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const comaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    setCalc({
      ...calc,
      sign: e.target.value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X" || sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const steps = [
    "Input the data",
    "Calculate the result",
  ];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Simple calculator | Calyantra.com"
          description="Calculate your GPA, Simple Interest and Compound Interest."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            Simple Calculator
          </Typography>
          <Typography
            align="center"
            color={"text.secondary"}
            variant="body1"
            sx={{ mb: 3 }}
          >
            A simple normal calculator
          </Typography>
        </Box>
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          alignItems={"center"}
          width={{ xs: "max-content" }}
          margin={"auto"}
        >
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              elevation={3}
              sx={{ width: "max-content" }}
            >
              <Table aria-label="Simple calculator table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={4}>
                      <TextField
                        hiddenLabel
                        sx={{ width: "100%" }}
                        size="small"
                        variant="filled"
                        value={calc.num ? calc.num : calc.res}
                        id="filled-read-only-result"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"C"}
                        onClick={resetClickHandler}
                      >
                        C
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"+-"}
                        onClick={invertClickHandler}
                      >
                        +-
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"%"}
                        onClick={percentClickHandler}
                      >
                        %
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"/"}
                        onClick={signClickHandler}
                      >
                        /
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"7"}
                        onClick={numClickHandler}
                      >
                        7
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"8"}
                        onClick={numClickHandler}
                      >
                        8
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"9"}
                        onClick={numClickHandler}
                      >
                        9
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"x"}
                        onClick={signClickHandler}
                      >
                        x
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"4"}
                        onClick={numClickHandler}
                      >
                        4
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"5"}
                        onClick={numClickHandler}
                      >
                        5
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"6"}
                        onClick={numClickHandler}
                      >
                        6
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"-"}
                        onClick={signClickHandler}
                      >
                        -
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"1"}
                        onClick={numClickHandler}
                      >
                        1
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"2"}
                        onClick={numClickHandler}
                      >
                        2
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"3"}
                        onClick={numClickHandler}
                      >
                        3
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"+"}
                        onClick={signClickHandler}
                      >
                        +
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"0"}
                        onClick={numClickHandler}
                      >
                        0
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}}>
                      <Button
                        variant="contained"
                        value={"."}
                        onClick={comaClickHandler}
                      >
                        .
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: {xs: 0.5, sm: 2}}} colSpan={2}>
                      <Button
                        variant="contained"
                        value={"="}
                        onClick={equalsClickHandler}
                        sx={{ width: "100%" }}
                      >
                        =
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <GetTimeline getSteps={steps} />
        <GetRating />
        <Feedback />
      </Box>
    </Box>
  );
}
