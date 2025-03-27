import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material";
import MovieCard from "./components/MovieCard/MovieCard";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#ff9800",
            dark: "rgb(255, 102, 0)",
        },
        secondary: {
            main: "#f50057",
        },
    },
});



function App() {
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    );
}

export default App;
