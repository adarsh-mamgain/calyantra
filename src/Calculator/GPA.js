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
// import Donate from "../Components/Donate";
import Crumbs from "../Components/Crumbs";

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
  const n = 5,
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

  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Crumbs />
      <Typography variant="h2">GPA Calculator</Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} lg={9}>
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{ width: "max-content" }}
          >
            <Table aria-label="GPA calculating table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Credits</TableCell>
                  <TableCell>Grades</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matrix.map((rows, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell key={0} component="th" scope="row" align="right">
                      {(count += 1)}
                    </TableCell>
                    <TableCell>
                      <TextField
                        hiddenLabel
                        required
                        sx={{ width: 200 }}
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
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        hiddenLabel
                        required
                        sx={{ width: 90 }}
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
                      align="right"
                      onClick={gpaCalculate}
                    >
                      Calculate
                    </Button>
                  </TableCell>
                  <TableCell colSpan={2} align="right">
                    <TextField
                      hiddenLabel
                      sx={{ width: "100%" }}
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
        <Grid item xs={12} lg={3}>
          <Feedback />
          {/* <Donate /> */}
          <Typography variant="h1">ADS</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
