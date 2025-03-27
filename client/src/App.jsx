import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material";
import MovieCard from "./components/MovieCard/MovieCard";
import { createTheme, ThemeProvider } from "@mui/material";
import AllRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

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
    breakpoints: {
        values: {
          xs: 380,
          sm: 500,  // Custom small starts at 500px
          md: 800,  
          lg: 1200,
          xl: 1600,
        },
      },
});

function App() {
    return (
        // <GoogleOAuthProvider clientId={client_ID}>
            <ThemeProvider
                theme={theme}
            >
                {/* <AuthProvider> */}
                <Navbar />
                    <BrowserRouter>
                        <AllRoutes />
                    </BrowserRouter>
                {/* </AuthProvider> */}
            </ThemeProvider>
        // </GoogleOAuthProvider>
    );
}

export default App;
