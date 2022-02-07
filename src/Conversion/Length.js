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
import { useLocation } from "react-router-dom";

export default function Length() {
  const type = useLocation();
  var [result, setResult] = React.useState();

  const convert = (event) => {
    if (type.pathname == "/conversion/miles-to-kilometer") {
      setResult(event.target.value * 1.60934);
    } else {
      setResult(event.target.value / 10);
    }
  };

  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{ px: 20 }}>
        <Crumbs />
        <Typography color={"text.primary"} variant="h1">
          Length Convertor
        </Typography>
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
                        sx={{ width: 200 }}
                        size="small"
                        variant="filled"
                        value={result}
                        id="filled-credit"
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
          <Grid item xs={0} sm={3}>
            <Feedback />
            {/* <Donate /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
