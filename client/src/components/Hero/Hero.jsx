import { useState, useEffect } from "react";
import "./Hero.css";

import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const images = ["/assets/Variant-1.webp", "/assets/Variant-2.webp", "/assets/Variant-3.webp"];

const Hero = () => {
    const [bgImage, setBgImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgImage((prev) => {
                const nextIndex = (images.indexOf(prev) + 1) % images.length;
                return images[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <Box
            sx={{
                px: "0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignitems: "center",
                    justifyContent: "center",
                    width: "90%",
                    flexWrap: "wrap",
                }}
                className="header-text"
            >
                <Typography
                    variant="h2"
                    sx={{
                        lineHeight: "1em",
                        fontSize: "clamp(3.2rem, 1.1667rem + 5.3333vw, 4rem)",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                    }}
                >
                    Your style.
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        lineHeight: "1em",
                        fontSize: "clamp(3.2rem, 1.1667rem + 5.3333vw, 4rem)",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                    }}
                    color="var(--mui-blue)"
                >
                    Your vibe.
                </Typography>
            </Box>
            <Typography
                align="center"
                sx={{
                    maxWidth: '70ch',
                    paddingTop: "1rem",
                    fontSize: "clamp(1rem, 1rem + 0.5vw, 1.5rem)",
                }}
                className="header-desc"
                color="text.secondary"
            >
                Welcome to the MBTI Predictor & Recommendations App—your personalized gateway to self-discovery and
                entertainment! Uncover your personality type and receive tailored recommendations to match your unique
                traits and interests.
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
                className="asset-section"
            >
                <div
                    className="hero"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                ></div>
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
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "5px",
                    border: "1px solid grey",
                    marginTop: "-5rem",
                    zIndex: "20",
                }}
            >
                <Button size="large" variant="contained" sx={{backgroundColor: "var(--mui-blue)", fontWeight: 600}}>
                    What is MBTI?
                </Button>

            </ButtonGroup>
        </Box>
    );
};

export default Hero;
