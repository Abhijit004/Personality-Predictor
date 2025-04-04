import { Box, Card, Grid, CardContent, Typography, Chip, Divider } from "@mui/material";
import React, { useState } from "react";
import { InfoCard, MBTICard } from "../MBTICards/MBTICards";
import mbtiData from "../../assets/MBTI/mbti.json"
import cognitive from "../../assets/MBTI/congitiveFunc.json"
import mapping from "../../assets/MBTI/MBTIfunctionStacks.json"

const AboutMyMBTI = ({mbti}) => {
    // mbti = "INFP"
    const mbtiType = {name: mbti, data: mbtiData[mbti]}
    const [a, b, c, d] = mapping[mbti]
    console.log(mbtiType);
    console.log(a);
    console.log(c);
    console.log(b);
    console.log(d);
    
    
    return (
        <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
            <Grid container spacing={2}>
                <Grid size={{ xl: 12 }}>
                    <MBTICard mbti = {mbtiType}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard category = {cognitive[a]}/>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard category = {cognitive[b]}/>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard category = {cognitive[c]}/>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6}}>
                    <InfoCard category = {cognitive[d]}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutMyMBTI;
