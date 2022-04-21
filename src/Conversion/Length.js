import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Paper,
  TableContainer,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const lengthList = [
  {
    value: 1,
    label: "Nanometer",
  },
  {
    value: 1000,
    label: "Micrometer",
  },
  {
    value: 1000000,
    label: "Millimeter",
  },
  {
    value: 10000000,
    label: "Centimeter",
  },
  {
    value: 1000000000,
    label: "Meter",
  },
  {
    value: 1000000000000,
    label: "Kilometer",
  },
  {
    value: 3.048,
    label: "Foot",
  },
  {
    value: 2.54,
    label: "Inch",
  },
  {
    value: 1.609,
    label: "Mile",
  },
  {
    value: 9.144,
    label: "Yard",
  },
];

export default function Length() {
  var [result, setResult] = React.useState();
  var [matrix, setMatrix] = React.useState([null, null]);
  const handleChange = (event, key) => {
    let copy = [...matrix];
    copy[key] = event.target.value;
    setMatrix(copy);
    console.log(matrix);
  };

  const convert = (event) => {
    let copy = [...matrix];
    let value = Number(event.target.value);
    console.log(copy[1], value);
    if (copy[1] < copy[0]) {
      setResult(copy[1] / value);
    } else {
      setResult(value / copy[1]);
    }
  };

  const steps = ["Input the data", "Convert the Length"];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Online convertors | Calyantra.com"
          description="Convert length 📏, liquids 🧪 and temperature 🌡 into different metric units."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            Length Convertor
          </Typography>
          <Typography
            align="center"
            color={"text.secondary"}
            variant="body1"
            sx={{ mb: 3 }}
          >
            Convert the length into different metric units
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
              width={"max-content"}
            >
              <Table aria-label="Length converting table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TextField
                        hiddenLabel
                        required
                        sx={{ width: 130 }}
                        size="small"
                        variant="filled"
                        onChange={(e) => convert(e)}
                        type="number"
                        id="filled-length"
                      />
                    </TableCell>
                    <TableCell rowSpan={2}>
                      <FontAwesomeIcon icon={solid("equals")} size={"2x"} />
                    </TableCell>
                    <TableCell>
                      <TextField
                        hiddenLabel
                        disabled
                        sx={{ width: 130 }}
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
                  <TableRow>
                    <TableCell>
                      <TextField
                        hiddenLabel
                        required
                        sx={{ width: 130 }}
                        size="small"
                        variant="filled"
                        onChange={(e) => handleChange(e, 0)}
                        id="filled-select-length"
                        defaultValue={10000000}
                        select
                      >
                        {lengthList.map((option) => (
                          <MenuItem key={option.label} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        hiddenLabel
                        required
                        sx={{ width: 130 }}
                        size="small"
                        variant="filled"
                        onChange={(e) => handleChange(e, 1)}
                        id="filled-select-length"
                        defaultValue={3.048}
                        select
                      >
                        {lengthList.map((option) => (
                          <MenuItem key={option.label} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
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
