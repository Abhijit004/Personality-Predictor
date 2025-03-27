import React from "react";
import "./Homepage.css";
import { Avatar, Box } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { createTheme } from "@mui/material/styles";

const demoTheme = createTheme({
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

const Homepage = () => {
    return (
        <AppProvider
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                title: "VibeSphere",
                homeUrl: "/",
            }}
            theme={demoTheme}
        >
            <DashboardLayout
                hideNavigation
                slots={{

                    toolbarActions: () => <Avatar sx = {{width: 32, height: 32}}/>,
                    // sidebarFooter: SidebarFooter,
                }}
            >
                <PageContainer>
                    <Hero />
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
};

export default Homepage;
