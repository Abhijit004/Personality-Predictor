import { useState, useEffect } from "react";
import "./Navbar.css";
import { Box, Typography, Button } from "@mui/material";

const Navbar = () => {
    return (
        <Box sx = {{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 1rem",
        }}>
            <Typography>AppName</Typography>
            <Button variant="contained">Login</Button>
        </Box>
    );
};

export default Navbar;
