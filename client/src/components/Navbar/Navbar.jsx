import { useState, useEffect } from "react";
import "./Navbar.css";
import { Box, Typography, Button } from "@mui/material";

const Navbar = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 1rem",
                // backgroundColor: "rgba(255, 255, 255, 0.1)",
                position: "fixed",
                width: "100%"
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: "var(--mui-orange)",
                }}
            >
                AppName
            </Typography>
            <Button variant="contained">Login</Button>
        </Box>
    );
};

export default Navbar;
