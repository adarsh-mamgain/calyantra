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
} from "@mui/material";
import Feedback from "../Components/Feedback";
import { ResponsivePie } from "@nivo/pie";
import GetHelmet from "../Components/GetHelmet";
import { useLocation } from "react-router-dom";
import GetTimeline from "../Components/GetTimeline";
import GetRating from "../Components/GetRating";

export default function SimpleInterest() {
  var [calc, setCalc] = React.useState({
    principal: 100,
    interest: 7,
    time: 1,
    roi: 7,
    result: 107,
  });

  const pieData = [
    {
      id: "Principal",
      label: "Principal",
      value: calc.principal,
      color: "hsl(167, 70%, 50%)",
    },
    {
      id: "Interest",
      label: "Interest",
      value: calc.roi,
      color: "hsl(119, 70%, 50%)",
    },
  ];

  const handlePrincipal = (event) => {
    setCalc({
      ...calc,
      principal: Number(event.target.value),
      roi: Number((event.target.value * calc.interest * calc.time) / 100),
      result: Number(
        Number(event.target.value) +
          Number((event.target.value * calc.interest * calc.time) / 100)
      ),
    });
    console.log(calc);
  };

  const handleInterest = (event) => {
    setCalc({
      ...calc,
      interest: Number(event.target.value),
      roi: Number((calc.principal * event.target.value * calc.time) / 100),
      result: Number(
        calc.principal +
          Number((calc.principal * event.target.value * calc.time) / 100)
      ),
    });
    console.log(calc);
  };

  const handleTime = (event) => {
    setCalc({
      ...calc,
      time: Number(event.target.value),
      roi: Number((calc.principal * calc.interest * event.target.value) / 100),
      result: Number(
        calc.principal +
          Number((calc.principal * calc.interest * event.target.value) / 100)
      ),
    });
    console.log(calc);
  };

  const steps = ["Input the data", "Calculate Simple Interest"];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Simple Interest calculator | Calyantra.com"
          description="Calculate your GPA, Simple Interest and Compound Interest."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            Simple Interest Calculator
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
          justifyContent="center"
          alignItems={"center"}
          width={{ xs: "100%", sm: "max-content" }}
          margin={"auto"}
        >
          <Grid item xs={12}>
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
                        size="small"
                        variant="filled"
                        value={calc.principal}
                        onChange={(e) => handlePrincipal(e)}
                        type="number"
                        id="filled-principal-amount"
                        inputProps={{ min: 0 }}
                      />
                    </TableCell>
                    <TableCell rowSpan={6}>
                      <Box width={350} height={300}>
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
                          theme={{
                            tooltip: {
                              container: {
                                background:
                                  localStorage.getItem("mode") === "dark"
                                    ? "#333333"
                                    : "#ffffff",
                              },
                            },
                          }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rate of Interest (p.a)</TableCell>
                    <TableCell align="right">
                      <TextField
                        hiddenLabel
                        required
                        key="1"
                        size="small"
                        variant="filled"
                        value={calc.interest}
                        onChange={(e) => handleInterest(e)}
                        type="number"
                        id="filled-interest"
                        inputProps={{ min: 0 }}
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
                        size="small"
                        variant="filled"
                        value={calc.time}
                        onChange={(e) => handleTime(e)}
                        type="number"
                        id="filled-time"
                        inputProps={{ min: 0 }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" component="span">
                        Principal:
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{calc.principal}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" component="span">
                        Interest:
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{calc.roi}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" component="span">
                        Total return:
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{calc.result}</Typography>
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
