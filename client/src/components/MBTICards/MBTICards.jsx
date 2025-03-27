import { Box, Card, Grid, CardContent, Typography, Chip, Divider } from "@mui/material";
import React from "react";

export const MBTICard = () => {
    return (
        <Card elevation={5} sx={{ p: 0.5}}>
            <CardContent sx={{ display: "flex", gap: 2 }} className="mbti-card">
                <Box sx = {{minWidth: 300}}>
                    <img src={"/assets/MBTI/ISFJ.png"} style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 20 }}>
                        Your MBTI Type is
                    </Typography>
                    <Typography
                        gutterBottom
                        variant={"h1"}
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em", fontFamily: "monospace", lineHeight: "1em", m: 0 }}
                    >
                        INFP
                    </Typography>

                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {["Funny", "Free-going", "Happy", "Some tag1", "Anything else?"].map((tag, i) => (
                            <Chip label={tag} size="large" color="primary" key={i} variant="outlined" />
                        ))}
                    </Box>
                    <Divider sx = {{my: 2}}/>
                    <Typography variant="body1" color="text.primary" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae in corrupti accusamus eius
                        suscipit blanditiis aliquam consequuntur
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export const InfoCard = () => {
    return (
        <Card elevation={4} sx={{ p: 1 }}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Type
                </Typography>
                <Typography variant="h4" color="text.primary">
                    Introversion
                </Typography>
                <Divider />

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Description
                </Typography>
                <Typography variant="body1" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae in corrupti accusamus eius
                    suscipit blanditiis aliquam consequuntur
                </Typography>
            </CardContent>
        </Card>
    );
};