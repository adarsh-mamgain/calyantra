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
import Feedback from "../Sidebar/Feedback";
import Donate from "../Sidebar/Donate";
import Crumbs from "../Crumbs";

export default function Length() {
  const [result, setResult] = React.useState(0);

  const convert = (event) => {
    setResult(event/10);
  };

  return (
    <Box sx={{ px: 20, m: 3 }}>
      <Crumbs />
      <Typography variant="h2">Length Convertor</Typography>
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
                  <TableCell>Millimeter</TableCell>
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
                  <TableCell>Centimeter</TableCell>
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
        <Grid item xs={0} sm={3} bgcolor="grey">
          <Feedback />
          <Donate />
          <Typography variant="h1">ADS</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
