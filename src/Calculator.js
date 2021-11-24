import React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const grades = [
    {
      label: 'O',
      value: '10',
    },
    {
      label: 'A+',
      value: '9',
    },
    {
      label: 'A',
      value: '8',
    },
    {
      label: 'B+',
      value: '7',
    },
    {
      label: 'B',
      value: '6',
    },
    {
      label: 'C',
      value: '5',
    },
    {
      label: 'P',
      value: '4',
    },
    {
      label: 'F',
      value: '3',
    },
    {
      label: 'AB',
      value: '2',
    },
    {
      label: 'I',
      value: '0',
    },
];

export default function Calculator() {
    const [grade, setGrades] = React.useState('O');
  
    const handleChange = (event) => {
      setGrades(event.target.value);
    };

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} lg={6}>
                <Box
                component="form"
                sx={{ m: 3 }}
                autoComplete="off">
                    <Typography>1. Chemistry</Typography>
                    <TextField hiddenLabel required sx={{ m: 1 }} size="small" variant="filled"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="filled-credit"
                    />
                    <TextField hiddenLabel required sx={{ m: 1, minWidth: 80 }} size="small" variant="filled"
                    select
                    value={grade}
                    onChange={handleChange}
                    id="filled-select-grade"
                    >
                    {grades.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <Typography>2. Maths</Typography>
                    <TextField hiddenLabel required sx={{ m: 1 }} size="small" variant="filled"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="filled-credit"
                    />
                    <TextField hiddenLabel required sx={{ m: 1, minWidth: 80 }} size="small" variant="filled"
                    select
                    value={grade}
                    onChange={handleChange}
                    id="filled-select-grade"
                    >
                    {grades.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <Typography>1. English</Typography>
                    <TextField hiddenLabel required sx={{ m: 1 }} size="small" variant="filled"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="filled-credit"
                    />
                    <TextField hiddenLabel required sx={{ m: 1, minWidth: 80 }} size="small" variant="filled"
                    select
                    value={grade}
                    onChange={handleChange}
                    id="filled-select-grade"
                    >
                    {grades.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </Box>
            </Grid>
        </Grid>
    )
}