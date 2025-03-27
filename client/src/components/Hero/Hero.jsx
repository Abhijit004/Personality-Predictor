import { useState, useEffect } from "react";
import "./Hero.css";

import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                px: "0.5rem",
                py: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"

            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignitems: "center",
                    justifyContent: "center",
                    width: "90%",
                    flexWrap: "wrap"
                }}
            >
                <Typography variant="h2" sx={{ lineHeight: "1em", fontSize: "clamp(2.5rem, 1.1667rem + 5.3333vw, 5rem)", whiteSpace: "nowrap" }}>
                    Your style.
                </Typography>
                <Typography variant="h2" sx={{ lineHeight: "1em", fontSize: "clamp(2.5rem, 1.1667rem + 5.3333vw, 5rem)", whiteSpace: "nowrap" }} color="var(--mui-orange)">
                    Your vibe.
                </Typography>
            </Box>
            <Typography
                align="center"
                sx={{
                    width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
                    paddingTop: "1rem",
                    fontSize: "1rem",
                }}
            >
                Welcome to the MBTI Predictor & Recommendations App—your personalized gateway to self-discovery and entertainment! Uncover your personality type and receive tailored recommendations to match your unique traits and interests.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "1.5rem",
                    position: "relative",
                    py: "3rem",
                }}
            >
                <div className="hero"></div>
                <div className="comment"></div>
                <div className="post"></div>
                <div className="chat"></div>
                <div className="designer"></div>
            </Box>
            <ButtonGroup
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem 2rem",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid grey",
                    marginTop: "-5rem",
                    zIndex: "20"
                }}
            >
                <Button variant="contained">Take the test</Button>
                <Button variant="outlined">Know about MBTI</Button>
            </ButtonGroup>
        </Box>
    );
};

export default Hero;
