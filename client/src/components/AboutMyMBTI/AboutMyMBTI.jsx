import { Box, Card, Grid, CardContent, Typography, Chip, Divider } from "@mui/material";
import React from "react";
import { InfoCard, MBTICard } from "../MBTICards/MBTICards";

const AboutMyMBTI = () => {
    return (
        <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
            <Grid container spacing={2}>
                <Grid size={{ xl: 12 }}>
                    <MBTICard />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutMyMBTI;
