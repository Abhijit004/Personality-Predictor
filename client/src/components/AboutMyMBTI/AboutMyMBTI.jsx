import { Box, Card, Container, CardContent, Typography, Chip, Divider } from "@mui/material";
import React from "react";

const MBTICard = () => {
    return (
        <Card sx={{ width: "100%" }} elevation={4}>
            <CardContent>
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

                <Box sx={{ width: 330, height: 330, borderRadius: "10px", p: 0 }}>
                    <img src={"/assets/MBTI/ISFJ.png"} style={{ width: "100%", height: "100%" }} />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}>
                    {["Funny", "Free-going", "Happy", "Some tag1", "Anything else?"].map((tag, i) => (
                        <Chip label={tag} size="large" color="primary" key={i} variant="outlined" />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

const InfoCard = () => {
    return (
        <Card elevation={4} sx={{ width: 300 }}>
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

const AboutMyMBTI = () => {
    return (
        <Card
            sx={{
                display: "flex",
                alignItems: "start",
                gap: 1.5,
                // flexWrap: "wrap",
                
            }}
            elevation={0}
        >
            <Box>
                <MBTICard />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    // alignItems: "center",
                    // mt: 1,
                    gap: 1.5,
                    flexWrap: "wrap",
                    "& > *": {
                        minWidth: 300,
                        flexGrow: 1,
                        flexBasis: 300,
                    },
                }}
            >
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </Box>
        </Card>
    );
};

export default AboutMyMBTI;
