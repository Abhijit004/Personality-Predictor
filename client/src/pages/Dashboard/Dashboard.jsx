import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Books from "../../components/Books/Books";
import Movies from "../../components/Movies/Movies";
import AboutMyMBTI from "../../components/AboutMyMBTI/AboutMyMBTI";
import Friends from "../../components/Friends/Friends";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook"; // For Books
import MovieIcon from "@mui/icons-material/Movie"; // For Movies
import PeopleIcon from "@mui/icons-material/People"; // For Friends
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // For Leisure
import StarIcon from "@mui/icons-material/Star"; // For Recommendations Header
import PersonSearchIcon from "@mui/icons-material/PersonSearch"; // For "People You May Like" header
import AccountMenu from "../../components/AccountMenu/AccountMenu";
import DashboardHome from "../../components/DashboardHome/DashboardHome";

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

export default function Dashboard(props) {
    const { window } = props;

    const router = useDemoRouter("/dashboard");
    function renderPage() {
        switch (router.pathname) {
            case "/aboutmbti":
                return <AboutMyMBTI />;
            case "/books":
                return <Books />;
            case "/movies":
                return <Movies />;
            case "/Friends":
                return <Friends />;
            case "/":
            case "/dashboard":
                return <DashboardHome />
            default:
                return `No Route to this ${router.pathname}` ;
        }
    }

    // Remove this const when copying and pasting into your project.
    const demoWindow = window ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            window={demoWindow}
            theme={demoTheme}
            branding={{
                logo: <img src={"/icon.svg"} alt="VibeSphere" />,
                title: "",
                homeUrl: "/",
            }}
        >
            <DashboardLayout
                slots={{
                    toolbarActions: () => <AccountMenu />,
                    // sidebarFooter: SidebarFooter,
                }}
            >
                <PageContainer>{renderPage()}</PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
