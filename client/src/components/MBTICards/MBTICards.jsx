import { Box, Card, Grid, CardContent, Typography, Chip, Divider, colors, CardActionArea } from "@mui/material";
import React from "react";
import "./MBTICards.css";
import { deepPurple } from "@mui/material/colors";

export const MBTICard = ({ mbti }) => {
    console.log(mbti);

    return (
        <Card elevation={5} sx={{ p: 0.5 }} className="mbti-card-wrapper">
            <CardContent sx={{ display: "flex", gap: 2 }} className="mbti-card">
                <Box sx={{ minWidth: 300 }}>
                    <img src={`/assets/MBTI_img/${mbti.name}.png`} style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 20, color: "#fff" }}>
                        Your MBTI Type is
                    </Typography>
                    <Typography
                        gutterBottom
                        variant={"h1"}
                        component="div"
                        sx={{
                            fontWeight: 600,
                            lineHeight: "1.2em",
                            fontFamily: "monospace",
                            lineHeight: "1em",
                            m: 0,
                            color: "#fff",
                        }}
                    >
                        {mbti.name}
                    </Typography>

                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {mbti.data.types?.map((tag, i) => (
                            <Chip
                                label={tag}
                                size="large"
                                key={i}
                                variant="filled"
                                sx={{ color: deepPurple[900], bgcolor: "var(--mui-yellow)" }}
                            />
                        ))}
                    </Box>
                    <Divider sx={{ my: 2, border: "0.5px solid rgba(255, 255, 255, 50%)" }} />
                    <Typography variant="body1" color="text.primary" sx={{ color: "#fff" }}>
                        {mbti.data.description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export const InfoCard = ({ category }) => {
    return (
        <Card elevation={4} className="mbti-small-wrapper">
            <CardActionArea>
                <CardContent sx = {{p: 3}}>
                    <Typography variant="h5" color="text.primary">
                        <Chip
                            label={category.short}
                            size="large"
                            color="secondary"
                            variant="filled"
                            sx={{ my: 1, mr: 1 }}
                        />
                        {category.name}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1" color="text.primary">
                        {category.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
