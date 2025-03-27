import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import AllRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const appTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    colorSchemes: { dark: true, light: true },
});

function App() {
    return (
        // <GoogleOAuthProvider clientId={client_ID}>
            <ThemeProvider
                theme={appTheme}
            >
                {/* <AuthProvider> */}
                {/* <Navbar /> */}
                    <BrowserRouter>
                        <AllRoutes />
                    </BrowserRouter>
                {/* </AuthProvider> */}
            </ThemeProvider>
        // </GoogleOAuthProvider>
    );
}

export default App;
