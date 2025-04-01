import React from "react";
import { Card, Divider, Box } from "@mui/material";
import PersonCard from "../PersonCard/PersonCard"

const Friends = ({ matches }) => {
    return (
        <Card elevation={0}>
            Similar Friends
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    gap: 2,
                    flexWrap: "wrap",
                    "& > *": {
                        minWidth: 300,
                        flexGrow: 1,
                        flexBasis: 300,
                    },
                }}
            >
                {matches.map((person, i) => (
                    <PersonCard person={person} key={i}/>
                ))}
            </Box>
        </Card>
    );
};

export default Friends;
