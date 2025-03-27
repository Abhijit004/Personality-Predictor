import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Books from "../../components/Books/Books";
import Movies from "../../components/Movies/Movies";
import AboutMyMBTI from "../../components/Navbar/AboutMyMBTI/AboutMyMBTI";
import Friends from "../../components/Friends/Friends";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook"; // For Books
import MovieIcon from "@mui/icons-material/Movie"; // For Movies
import PeopleIcon from "@mui/icons-material/People"; // For Friends
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // For Leisure
import StarIcon from "@mui/icons-material/Star"; // For Recommendations Header
import PersonSearchIcon from "@mui/icons-material/PersonSearch"; // For "People You May Like" header

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
        segment: "leisure",
        title: "Leisure",
        icon: <SportsEsportsIcon />, // Changed to a more fitting icon
        children: [
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
        ],
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

const Skeleton = styled("div")(({ theme, height }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function Dashboard(props) {
    const { window } = props;

    const router = useDemoRouter("/dashboard");
    function renderPage() {
        switch (router.pathname) {
            case "/aboutmbti":
                return <AboutMyMBTI />;
            case "/leisure/books":
                return <Books />;
            case "/leisure/movies":
                return <Movies />;
            case "/Friends":
                return <Friends />;
            default:
                return "No Route to this";
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
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                title: "MUI",
                homeUrl: "/",
            }}
        >
            <DashboardLayout>
                <PageContainer>
                    {renderPage()} {/* Renders the correct page dynamically */}
                    <Grid container spacing={1}>
                        <Grid size={5} />
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid size={4}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={8}>
                            <Skeleton height={100} />
                        </Grid>

                        <Grid size={12}>
                            <Skeleton height={150} />
                        </Grid>
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>

                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                    </Grid>
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
