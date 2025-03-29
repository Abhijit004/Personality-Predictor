import React from "react";
import { Card, CardContent, Grid, Divider, Typography } from "@mui/material";
import { InfoCard } from "../MBTICards/MBTICards";

const DashCard = ({className}) => {
    return (
        <Card elevation={4} sx={{ p: 1 }} className={className}>
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
            <Grid size={{ sm: 12, md: 6 }}>
                <DashCard className="mbti-card-wrapper"/>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <DashCard className="book-card-wrapper"/>
            </Grid>

            <Grid size={{ sm: 12, md: 6 }}>
                <DashCard className="movie-card-wrapper"/>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <DashCard className="friends-card-wrapper"/>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
