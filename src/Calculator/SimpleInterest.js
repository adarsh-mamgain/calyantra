import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  TableContainer,
  TableRow,
  Table,
  TableBody,
  TableCell,
  Slider,
} from "@mui/material";
import Feedback from "../Components/Feedback";
// import Donate from "../Components/Donate";
import Crumbs from "../Components/Crumbs";
import { ResponsivePie } from "@nivo/pie";

export default function SimpleInterest() {
  var [matrix, setMatrix] = React.useState([100, 7, 1]);
  var [roi, setROI] = React.useState(7);
  var [result, setResult] = React.useState(1070);

  const pieData = [
    {
      id: "Principal",
      label: "Principal",
      value: matrix[0],
      color: "hsl(167, 70%, 50%)",
    },
    {
      id: "Interest",
      label: "Interest",
      value: matrix[1],
      color: "hsl(119, 70%, 50%)",
    },
  ];
  const handleSliderChange = (event, key) => {
    let copy = [...matrix];
    copy[key] = Number(event.target.value);
    setMatrix(copy);
    calculateInterest(copy);
  };

  const handleInputChange = (event, key) => {
    let copy = [...matrix];
    copy[key] = Number(event.target.value);
    setMatrix(copy);
    calculateInterest(copy);
  };

  function calculateInterest(copy) {
    setROI(Number((copy[2] * (copy[0] * copy[1])) / 100));
    setResult(copy[0] + interest);
    console.log(pieData);
  };

  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Crumbs />
      <Typography variant="h2">Simple Interest Calculator</Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} sm={9}>
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{ width: "max-content" }}
          >
            <Table aria-label="Simple Interest calculating table">
              <TableBody>
                <TableRow>
                  <TableCell>Principal Amount</TableCell>
                  <TableCell align="right">
                    <TextField
                      hiddenLabel
                      required
                      key="0"
                      sx={{ width: 150 }}
                      size="small"
                      variant="filled"
                      value={matrix[0]}
                      onChange={handleInputChange(0)}
                      type="number"
                      id="filled-principal-amount"
                    />
                  </TableCell>
                  <TableCell rowSpan={6}>
                    <Box width={400} height={350}>
                      <ResponsivePie
                        data={pieData}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        activeOuterRadiusOffset={8}
                        borderWidth={1}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", 0.2]],
                        }}
                        enableArcLinkLabels={false}
                        arcLabel="id"
                      />
                      <Typography>Principal is: {matrix[0]}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Slider
                      aria-label="principal"
                      value={typeof value === 'number' ? matrix[0] : 0}
                      onChange={handleSliderChange(1)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rate of Interest (p.a)</TableCell>
                  <TableCell align="right">
                    <TextField
                      hiddenLabel
                      required
                      key="1"
                      sx={{ width: 150 }}
                      size="small"
                      variant="filled"
                      value={matrix[1]}
                      onChange={handleInputChange(0)}
                      type="number"
                      id="filled-interest"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Slider
                      aria-label="interest"
                      value={typeof value === 'number' ? matrix[1] : 0}
                      onChange={handleSliderChange(1)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Time period</TableCell>
                  <TableCell align="right">
                    <TextField
                      hiddenLabel
                      required
                      key="2"
                      sx={{ width: 150 }}
                      size="small"
                      variant="filled"
                      value={matrix[2]}
                      onChange={handleInputChange}
                      type="number"
                      id="filled-time"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Slider
                      aria-label="time"
                      value={typeof value === 'number' ? matrix[2] : 0}
                      onChange={handleSliderChange}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={0} sm={3}>
          <Feedback />
          {/* <Donate /> */}
          <Typography variant="h1">ADS</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
