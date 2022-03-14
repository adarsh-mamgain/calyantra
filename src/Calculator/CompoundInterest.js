import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
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

export default function CompoundInterest() {
  var [calc, setCalc] = React.useState({
    principal: 100,
    rate: 7,
    time: 2,
    roi: 14.49,
    number: 1,
    result: 114.49,
  });

  const pieData = [
    {
      id: "Principal",
      label: "Principal",
      value: calc.principal,
      color: "hsl(43, 100%, 50%)",
    },
    {
      id: "Interest",
      label: "Interest",
      value: calc.roi,
      color: "hsl(181, 89%, 40%)",
    },
  ];

  const handlePrincipal = (event) => {
    setCalc({
      ...calc,
      principal: Number(event.target.value),
      roi: Number(
        event.target.value *
          Math.pow(1 + calc.rate / calc.number / 100, calc.number * calc.time) -
          event.target.value
      ).toFixed(2),
      result: Number(
        event.target.value *
          Math.pow(1 + calc.rate / calc.number / 100, calc.number * calc.time)
      ).toFixed(2),
    });
  };

  const handleInterest = (event) => {
    setCalc({
      ...calc,
      rate: Number(event.target.value),
      roi: Number(
        calc.principal *
          Math.pow(
            1 + event.target.value / calc.number / 100,
            calc.number * calc.time
          ) -
          calc.principal
      ).toFixed(2),
      result: Number(
        calc.principal *
          Math.pow(
            1 + event.target.value / calc.number / 100,
            calc.number * calc.time
          )
      ).toFixed(2),
    });
  };

  const handleTime = (event) => {
    setCalc({
      ...calc,
      time: Number(event.target.value),
      roi: Number(
        calc.principal *
          Math.pow(
            1 + calc.rate / calc.number / 100,
            calc.number * event.target.value
          ) -
          calc.principal
      ).toFixed(2),
      result: Number(
        calc.principal *
          Math.pow(
            1 + calc.rate / calc.number / 100,
            calc.number * event.target.value
          )
      ).toFixed(2),
    });
  };

  const handleNumber = (event) => {
    setCalc({
      ...calc,
      number: Number(event.target.value),
      roi: Number(
        calc.principal *
          Math.pow(
            1 + calc.rate / event.target.value / 100,
            event.target.value * calc.time
          ) -
          calc.principal
      ).toFixed(2),
      result: Number(
        calc.principal *
          Math.pow(
            1 + calc.rate / event.target.value / 100,
            event.target.value * calc.time
          )
      ).toFixed(2),
    });
  };

  const steps = ["Input the data", "Calculate Compound Interest"];

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: { xs: 2, sm: 10, md: 20 }, py: 2 }}>
        <GetHelmet
          title="Compound Interest calculator | Calyantra.com"
          description="Calculate your GPA, Simple Interest and Compound Interest."
          url={useLocation().pathname}
        />
        <Box>
          <Typography align="center" color={"text.primary"} variant="h1">
            Compound Interest Calculator
          </Typography>
          <Typography
            align="center"
            color={"text.secondary"}
            variant="body1"
            sx={{ mb: 3 }}
          >
            Calculate Compound Interest and share link with friends
          </Typography>
        </Box>
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          alignItems={"center"}
          bgcolor={"background.paper"}
        >
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <TableContainer bgcolor={"background.paper"}>
              <Table aria-label="Compound Interest calculating table">
                <TableBody>
                  <TableRow>
                    <TableCell>Principal Amount (P)</TableCell>
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
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rate of Interest (r)</TableCell>
                    <TableCell align="right">
                      <TextField
                        hiddenLabel
                        required
                        key="1"
                        size="small"
                        variant="filled"
                        value={calc.rate}
                        onChange={(e) => handleInterest(e)}
                        type="number"
                        id="filled-interest"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Year (t)</TableCell>
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
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Compounds / Year (n)</TableCell>
                    <TableCell align="right">
                      <TextField
                        hiddenLabel
                        required
                        key="2"
                        size="small"
                        variant="filled"
                        value={calc.number}
                        onChange={(e) => handleNumber(e)}
                        type="number"
                        id="filled-time"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" component="span">
                        Principal:
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        hiddenLabel
                        size="small"
                        variant="filled"
                        value={calc.principal}
                        id="filled-read-only-principal"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" component="span">
                        Interest:
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        hiddenLabel
                        size="small"
                        variant="filled"
                        value={calc.roi}
                        id="filled-read-only-roi"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" component="span">
                        Total return:
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        hiddenLabel
                        size="small"
                        variant="filled"
                        value={calc.result}
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
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box height={300}>
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
                arcLabelsTextColor={
                  localStorage.getItem("mode") === "dark"
                    ? "#ffffff"
                    : "#333333"
                }
                theme={{
                  tooltip: {
                    container: {
                      background:
                        localStorage.getItem("mode") === "dark"
                          ? "#333333"
                          : "#ffffff",
                      color:
                        localStorage.getItem("mode") === "dark"
                          ? "#ffffff"
                          : "#333333",
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <GetTimeline getSteps={steps} />
        <GetRating />
        <Feedback />
      </Box>
    </Box>
  );
}
