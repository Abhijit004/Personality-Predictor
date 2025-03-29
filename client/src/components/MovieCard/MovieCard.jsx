import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Rating, Divider, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import "./MovieCard.css";

export const MovieSmall = ({ movie, selected, setSelected, index }) => {
    return (
        <Card className="movie-small-wrapper">
            <CardActionArea
                data-active={selected ? "yes" : "no"}
                onClick={() => setSelected(index)}
                sx={{
                    "&[data-active=yes]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                            backgroundColor: "action.selectedHover",
                        },
                    },
                }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, lineHeight: "1.2em" }}>
                        {movie.title}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <Rating
                            name="read-only"
                            value={movie.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ color: "var(--mui-orange)" }}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            {movie.rating}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Released in {movie.year}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {movie.genre.map((tag, i) => (
                            <Chip
                                label={tag}
                                size="small"
                                sx={{ bgcolor: "var(--mui-orange)", color: "#fff" }}
                                key={i}
                            />
                        ))}
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const MovieMain = ({ movie }) => {
    const styles = { display: "flex", gap: 2 };
    const width = window.innerWidth;
    const desktop = width > 700;
    console.log(desktop, width);

    return (
        <Card sx={{ p: 1 }} className="movie-card-wrapper">
            <CardContent sx={desktop ? { ...styles } : {}}>
                <Box sx={{ minWidth: desktop ? 300 : 150 }}>
                    <Typography
                        gutterBottom
                        variant={desktop ? "h3" : "h5"}
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em", color: "#fff" }}
                    >
                        {movie.title}
                    </Typography>
                    <Box sx={desktop ? {} : { display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                            Directed By
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500, color: "#fff" }}>
                            {movie.director}
                        </Typography>
                    </Box>
                </Box>

                {!desktop && <Divider sx={{ my: 1.5, border: "0.5px solid rgba(255, 255, 255, 50%)" }} />}
                {desktop && (
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{ border: "0.5px solid rgba(255, 255, 255, 50%)" }}
                    />
                )}

                <Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap" }}>
                        <Rating
                            name="read-only"
                            value={(movie.rating * 5) / 10}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ color: "#fff" }}
                        />
                        <Typography variant="body2" color="text.primary" sx={{ ml: 0.5, color: "#fff" }}>
                            {movie.rating}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.primary" sx={{ color: "#fff" }}>
                        Released in {movie.year}
                    </Typography>
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {movie.genre.map((tag, i) => (
                            <Chip label={tag} size="small" sx={{ bgcolor: "#bf360c", color: "#fff" }} key={i} />
                        ))}
                    </Box>
                    <Divider sx={{ my: 1.5, border: "0.5px solid rgba(255, 255, 255, 50%)" }} />
                    <Typography variant="body1" color="text.primary" sx={{ mt: 2, color: "#fff" }}>
                        {movie.description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
