import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const BoxItem = ({ number }) => (
    <Paper
        elevation={3}
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
            height: 70,
            bgcolor: number === 1 ? "primary.main" : "secondary.main",
            color: "white",
            width: 600/number
        }}
    >
        {number}
    </Paper>
);

export default function ResponsiveGrid() {
    return (
        <Grid container spacing={2}>
            {/* Biggest Box */}
            <Grid size="auto" xs={12} md={6}>
                <BoxItem number={1} />
            </Grid>

            {/* Two Medium Boxes */}
            <Grid size="auto" xs={12} sm={6}>
                <BoxItem number={2} />
            </Grid>
            <Grid size="auto" xs={12} sm={6}>
                <BoxItem number={3} />
            </Grid>

            {/* Three Smaller Boxes */}
            <Grid size="auto" xs={12} sm={4}>
                <BoxItem number={4} />
            </Grid>
            <Grid size="auto" xs={12} sm={4}>
                <BoxItem number={5} />
            </Grid>
            <Grid size="auto" xs={12} sm={4}>
                <BoxItem number={6} />
            </Grid>

            {/* Smallest Boxes: 7-18 */}
            {Array.from({ length: 12 }, (_, i) => (
                <Grid size="auto" xs={6} sm={3} md={2} key={i + 7}>
                    <BoxItem number={i + 7} />
                </Grid>
            ))}
        </Grid>
    );
}
