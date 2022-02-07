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
// import Donate from "../Components/Donate";
import Crumbs from "../Components/Crumbs";
import { ResponsivePie } from "@nivo/pie";

export default function CompoundInterest() {
  var [calc, setCalc] = React.useState({
    principal: 100,
    interest: 7,
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
      roi: 111,
      result: Number(
        event.target.value *
          Math.pow(1 + calc.interest / calc.number, calc.number * calc.time)
      ),
    });
    console.log(calc);
  };

  const handleInterest = (event) => {
    setCalc({
      ...calc,
      interest: Number(event.target.value),
      roi: 222,
      result: Number(
        calc.principal *
          Math.pow(
            1 + event.target.value / calc.number,
            calc.number * calc.time
          )
      ),
    });
    console.log(calc);
  };

  const handleTime = (event) => {
    setCalc({
      ...calc,
      time: Number(event.target.value),
      roi: 444,
      result: Number(
        calc.principal *
          Math.pow(
            1 + calc.interest / calc.number,
            calc.number * event.target.value
          )
      ),
    });
    console.log(calc);
  };

  const handleNumber = (event) => {
    setCalc({
      ...calc,
      number: Number(event.target.value),
      roi: 333,
      result: Number(
        calc.principal *
          Math.pow(
            1 + calc.interest / event.target.value,
            event.target.value * calc.time
          )
      ),
    });
    console.log(calc);
  };

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: 20 }}>
        <Crumbs />
        <Typography color={"text.primary"} variant="h1">
          Compound Interest Calculator
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={9}>
            <TableContainer
              component={Paper}
              elevation={3}
              sx={{ width: "max-content" }}
            >
              <Table aria-label="Compound Interest calculating table">
                <TableBody>
                  <TableRow>
                    <TableCell>Principal amount (P)</TableCell>
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
                    <TableCell rowSpan={6}>
                      <Box width={350} height={300}>
                        <ResponsivePie
                          data={pieData}
                          colors={{ datum: "data.color" }}
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
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rate of interest (r)</TableCell>
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
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Time period (t)</TableCell>
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
                    <TableCell>Compounds / Period (n)</TableCell>
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
          <Grid item xs={0} sm={3}>
            <Feedback />
            {/* <Donate /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
