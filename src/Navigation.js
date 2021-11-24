import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function Navigation() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                    Online Tools
                    </Typography>
                </Toolbar>
            </AppBar>
            <Breadcrumbs sx={{ m: 3 }} aria-label="breadcrumb" onClick={handleClick}>
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/calculator"
                >
                    <CalculateIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Calculator
                </Link>
                <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    GPA
                </Typography>
            </Breadcrumbs>
        </Box>
    );
}
