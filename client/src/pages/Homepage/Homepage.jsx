import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Hero from "../../components/Hero/Hero";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { createTheme } from "@mui/material/styles";
import { useAuth } from "../../AuthContext";
import { appTheme } from "../../App";
import AccountMenu from "../../components/AccountMenu/AccountMenu";
import MbtiForm from "../MbtiForm/MbitForm";
import Books from "../../components/Books/Books";
import Movies from "../../components/Movies/Movies";
import AboutMyMBTI from "../../components/AboutMyMBTI/AboutMyMBTI";
import Friends from "../../components/Friends/Friends";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook"; // For Books
import MovieIcon from "@mui/icons-material/Movie"; // For Movies
import PeopleIcon from "@mui/icons-material/People"; // For Friends
import StarIcon from "@mui/icons-material/Star"; // For Recommendations Header
import PersonSearchIcon from "@mui/icons-material/PersonSearch"; // For "People You May Like" header
import DashboardHome from "../../components/DashboardHome/DashboardHome";

function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

const NAVIGATION = [
    {
        kind: "header",
        title: "About Me",
    },
    {
        segment: "aboutmbti",
        title: "My Personality Type",
        icon: <DashboardIcon />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Recommendations",
        icon: <StarIcon />, // Added relevant icon for "Recommendations"
    },
    {
        segment: "books",
        title: "Books",
        icon: <MenuBookIcon />, // More appropriate for Books
    },
    {
        segment: "movies",
        title: "Movies",
        icon: <MovieIcon />, // More appropriate for Movies
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "People You May Like",
        icon: <PersonSearchIcon />, // Added an icon to match the section
    },
    {
        segment: "Friends",
        title: "My Friends",
        icon: <PeopleIcon />, // More appropriate than LayersIcon
    },
];

const Homepage = () => {
    const { user, handleLogin } = useAuth();
    console.log(user);
    const width = window.innerWidth

    const router = useDemoRouter("/");
    function renderDash(mbti) {
        switch (router.pathname) {
            case "/aboutmbti":
                return <AboutMyMBTI mbti={mbti} />;
            case "/books":
                return <Books />;
            case "/movies":
                return <Movies />;
            case "/Friends":
                return <Friends />;
            case "/":
            case "/dashboard":
                return <DashboardHome />;
            default:
                return `No Route to this ${router.pathname}`;
        }
    }
    function renderPage() {
        if (user) return user.mbti.length ? renderDash(user.mbti[0]) : <MbtiForm />;
        return <Hero />;
    }

    return (
        <AppProvider
            branding={{
                logo: <img src="/icon.svg" alt="VibeSphere" />,
                title: "",
                homeUrl: "/",
            }}
            theme={appTheme}
            navigation={NAVIGATION}
            router={router}
        >
            <DashboardLayout
                disableCollapsibleSidebar = {width >= 1350}
                defaultSidebarCollapsed
                hideNavigation={!user?.mbti.length}
                slots={{
                    toolbarActions: () => <AccountMenu />,
                    // sidebarFooter: SidebarFooter,
                }}
            >
                <PageContainer>{renderPage()}</PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
};

export default Homepage;
