import React from "react";
import { Card, CardContent, Grid, Divider, Typography } from "@mui/material";
import { InfoCard } from "../MBTICards/MBTICards";

const DashCard = () => {
    return (
        <Card elevation={4} sx={{ p: 1 }}>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    main services
                </Typography>
                <Typography variant="h4" color="text.primary">
                    My Personality
                </Typography>
                <Divider sx={{ my: 2 }} />

                <Typography variant="body1" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae in corrupti accusamus eius
                    suscipit blanditiis aliquam consequuntur
                </Typography>
            </CardContent>
        </Card>
    );
};

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <DashCard />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <DashCard />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <DashCard />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <DashCard />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
