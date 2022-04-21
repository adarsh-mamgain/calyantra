import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
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
import GetHelmet from "../Components/GetHelmet";
import { useLocation } from "react-router-dom";
import GetTimeline from "../Components/GetTimeline";
import GetRating from "../Components/GetRating";

const gradesList = [
  {
    value: "null",
    label: "None",
  },
  {
    value: 10,
    label: "O",
  },
  {
    value: 9,
    label: "A+",
  },
  {
    value: 8,
    label: "A",
  },
  {
    value: 7,
    label: "B+",
  },
  {
    value: 6,
    label: "B",
  },
  {
    value: 5,
    label: "C",
  },
  {
    value: 0,
    label: "F",
  },
];

export default function GPA() {
  const n = 10,
    m = 3;
  var count = 0;
  var [result, setResult] = React.useState(["Result"]);
  var [matrix, setMatrix] = React.useState(
    Array.from({ length: n }, () => Array.from({ length: m }, () => null))
  );
  const handleChange = (row, column, event) => {
    let copy = [...matrix];
    copy[row][column] = event.target.value;
    setMatrix(copy);
  };

  const gpaCalculate = () => {
    let copy = [...matrix];
    var credit,
      grade,
      sumPoints = 0,
      sumCredits = 0;
    copy.forEach((rows) => {
      if (rows[1] === "") {
        credit = 0;
      } else {
        credit = Number(rows[1]);
      }
      grade = Number(rows[2]);
      sumPoints += credit * grade;
      sumCredits += credit;
    });
    var gpa = sumPoints / sumCredits;
    setResult(gpa.toFixed(2));
  };

  const steps = [
    "Input the course data",
    "Calculate the GPA",
    "Copy and share the result",
  ];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="GPA calculator | Calyantra.com"
          description="Calculate your GPA, Simple Interest and Compound Interest."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            GPA Calculator
          </Typography>
          <Typography
            align="center"
            color={"text.secondary"}
            variant="body1"
            sx={{ mb: 3 }}
          >
            Calculate your GPA and share link with friends
          </Typography>
        </Box>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ xs: "100%", sm: "max-content" }}
          margin={"auto"}
        >
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              elevation={3}
            >
              <Table aria-label="GPA calculating table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="right"
                      sx={{ display: { xs: "none", sm: "table-cell" } }}
                    >
                      Sr.
                    </TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Credits</TableCell>
                    <TableCell>Grades</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matrix.map((rows, rowIndex) => (
                    <TableRow key={rowIndex}>
                      <TableCell
                        key={0}
                        component="th"
                        scope="row"
                        align="right"
                        sx={{ display: { xs: "none", sm: "table-cell" } }}
                      >
                        {(count += 1)}
                      </TableCell>
                      <TableCell>
                        <TextField
                          hiddenLabel
                          required
                          sx={{ width: { xs: 100, sm: 200 } }}
                          size="small"
                          variant="filled"
                          // key={1}
                          onChange={(e) => handleChange(rowIndex, 0, e)}
                          id="filled-course-name"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          hiddenLabel
                          required
                          sx={{ width: 100 }}
                          size="small"
                          variant="filled"
                          // key={2}
                          onChange={(e) => handleChange(rowIndex, 1, e)}
                          type="number"
                          id="filled-credit"
                          inputProps={{ min: 0 }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          hiddenLabel
                          required
                          sx={{ width: 100 }}
                          size="small"
                          variant="filled"
                          // key={3}
                          // ! here change the grades for particular key
                          onChange={(e) => handleChange(rowIndex, 2, e)}
                          id="filled-select-grade"
                          defaultValue={"null"}
                          select
                        >
                          {gradesList.map((option) => (
                            <MenuItem key={option.label} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2} align="right">
                      <Button
                        variant="contained"
                        onClick={gpaCalculate}
                      >
                        Calculate
                      </Button>
                    </TableCell>
                    <TableCell colSpan={2}>
                      <TextField
                        hiddenLabel
                        sx={{ width: { xs: 100, sm: "100%" } }}
                        size="small"
                        variant="filled"
                        value={result}
                        id="filled-read-only-result"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
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
