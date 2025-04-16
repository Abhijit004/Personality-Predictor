import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
    PsychologyRounded,
    LibraryBooksRounded,
    MovieRounded,
    IntegrationInstructionsRounded,
    CloudRounded,
    ApiRounded,
} from "@mui/icons-material";
import { blue, blueGrey, indigo } from "@mui/material/colors";

const items = [
    {
        icon: <PsychologyRounded />, // swap with an icon of your choice
        title: "MBTI Personality Prediction",
        description:
            "Get accurate MBTI personality type predictions based on your responses using NLP-powered text analysis.",
    },
    {
        icon: <LibraryBooksRounded />, // for books
        title: "Personalized Book Recommendations",
        description:
            "Discover curated books that align with your personality traits to deepen your understanding and enjoyment.",
    },
    {
        icon: <MovieRounded />, // for movies
        title: "Handpicked Movie Suggestions",
        description:
            "Enjoy a list of movies that match your MBTI type, offering stories and themes that truly resonate with you.",
    },
    {
        icon: <IntegrationInstructionsRounded />, // maybe a pipeline icon
        title: "Robust NLP Pipeline",
        description:
            "From text cleaning to TF-IDF vectorization and classification via Logistic Regression — the system ensures precision at each step.",
    },
    {
        icon: <CloudRounded />, // represents deployment
        title: "Full-Stack Deployment",
        description:
            "Built with Flask, React, Node.js, and MongoDB — hosted on Render and Vercel for smooth, real-time interactions.",
    },
    {
        icon: <ApiRounded />, // for API
        title: "API Powered & Scalable",
        description:
            "Provides an accessible prediction API that returns the top 3 probable MBTI types with confidence scores.",
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
            }}
        >
            <Container
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: "100%", md: "60%" },
                        textAlign: { sm: "left", md: "center" },
                    }}
                >
                    <Typography component="h2" variant="h3" gutterBottom fontWeight={600}>
                        Highlights
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.2rem" }}>
                        Explore why our product stands out: adaptability, durability, user-friendly design, and
                        innovation. Enjoy reliable customer support and precision in every detail.
                    </Typography>
                </Box>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.3rem" }}>
                    {items.map((item, index) => (
                        <Card
                            sx={{
                                p: 3,
                                width: {
                                    xs: "100%",
                                    md: "45%",
                                },
                                
                            }}
                            elevation={3}
                        >
                            <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                            <div>
                                <Typography gutterBottom sx={{ fontWeight: "medium", fontSize: "1.2rem" }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "1.2rem" }}>
                                    {item.description}
                                </Typography>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Box>
    );
}
