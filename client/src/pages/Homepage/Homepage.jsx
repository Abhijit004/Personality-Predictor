import React from "react";
import "./Homepage.css"
import { Box } from "@mui/material";
import Hero from "../../components/Hero/Hero";

const Homepage = ()=>{
    return (
        <Box sx={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
        }}>
            <Hero />
        </Box>
    )
}

export default Homepage