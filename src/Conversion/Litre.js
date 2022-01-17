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

export default function Litre() {
  var [result, setResult] = React.useState();

  const convert = (event) => {
    setResult(event.target.value / 1000);
  };

  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Crumbs />
      <Typography variant="h2">Litre Convertor</Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} sm={9}>
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{ width: "max-content" }}
          >
            <Table aria-label="GPA calculating table">
              <TableBody>
                <TableRow>
                  <TableCell>Millilitre</TableCell>
                  <TableCell>
                    <TextField
                      hiddenLabel
                      required
                      sx={{ width: 200 }}
                      size="small"
                      variant="filled"
                      onChange={(e) => convert(e)}
                      type="number"
                      id="filled-credit"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Litre</TableCell>
                  <TableCell>
                    <TextField
                      hiddenLabel
                      required
                      sx={{ width: 200 }}
                      size="small"
                      variant="filled"
                      value={result}
                      type="number"
                      id="filled-credit"
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
