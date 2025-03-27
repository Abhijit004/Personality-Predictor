import React, {useState, useEffect} from "react";
import "./Homepage.css";
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { createTheme } from "@mui/material/styles";
import { useAuth } from "../../AuthContext";
import { appTheme } from "../../App";
import AccountMenu from "../../components/AccountMenu/AccountMenu";

const Homepage = () => {

    const {user, handleLogin} = useAuth();
    return (
        <AppProvider
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                title: "VibeSphere",
                homeUrl: "/",
            }}
            theme={appTheme}
        >
            <DashboardLayout
                hideNavigation
                slots={{

                    toolbarActions: () => <AccountMenu />,
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
