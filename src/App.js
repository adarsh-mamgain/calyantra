import React from "react";
import Box from "@mui/material/Box"
import Navigation from "./Navigation";
import Home from "./Home";
import Calculator from "./Calculator";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Box>
            {/* <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="" element={ <Home /> } />
                    <Route path="/calculator" element={ <Calculator /> } />
                </Routes>
            </BrowserRouter> */}
            <Navigation />
            <Home />
            <Calculator />
        </Box>
    );
}
