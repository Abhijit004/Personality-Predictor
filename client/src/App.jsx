import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import AllRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const appTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    breakpoints: {
        values: {
            xs: 290,
            sm: 500, // Custom small starts at 500px
            md: 800,
            lg: 1200,
            xl: 1600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none", // Disable uppercase
                },
            },
        },
    },
    colorSchemes: { dark: true, light: true },
});

function App() {
    return (
        <GoogleOAuthProvider clientId={client_ID}>
            <ThemeProvider theme={appTheme}>
                <AuthProvider>
                    <BrowserRouter>
                        <AllRoutes />
                    </BrowserRouter>
                </AuthProvider>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
