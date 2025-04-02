import React from "react";
import { Card, CardContent, Typography, Chip, Box, Avatar, Divider, Paper } from "@mui/material";
import mbtiData from "../../assets/MBTI/mbti.json";

const PersonCard = ({ person }) => {
    const tags = mbtiData[person.mbti[0]].types;
    return (
        <Card
            sx={{
                maxWidth: 230,
                minWidth: 230,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
                "&:hover": {
                    transform: "translateY(-4px)",
                },
                // m: 6,
                position: "relative",
                background: "linear-gradient(var(--mycardoverlay), var(--mycardoverlay)), #009688 !important",
            }}
            variant="outlined"
        >
            <Box sx={{ p: 1, bgcolor: "#009688", position: "absolute", top: 0, width: "100%", height: 100 }}>
                <Box sx={{ p: 1, bgcolor: "#00695f", width: "max-content", borderRadius: 2, color: "#fff" }}>{person.mbti[0]}</Box>
            </Box>
            {/* Profile Image */}
            <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <Avatar
                    alt={person.name}
                    src={person.image}
                    sx={{
                        width: 140,
                        height: 140,
                        border: "3px solid #009688",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                />
            </Box>

            <CardContent sx={{ textAlign: "center" }}>
                {/* Name */}
                <Typography variant="h5" sx={{minHeight: '2.5em', lineHeight: '1em', overflowWrap: 'break-word'}}>{person.name}</Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ overflow: "scroll", "&::-webkit-scrollbar": { height: "2px" } }}
                    className="email"
                >
                    {person.email}
                </Typography>
                {/* Email */}

                <Divider sx={{ my: 1 }} />

                {/* Tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {tags?.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            variant="filled"
                            sx={{
                                bgcolor: "#009688",
                                color: "#fff",
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default PersonCard;
