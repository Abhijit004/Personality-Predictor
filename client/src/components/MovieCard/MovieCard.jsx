import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Rating, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import './MovieCard.css'

export const MovieSmall = ({ movie }) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, lineHeight: "1.2em" }}>
                    {movie.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Rating name="read-only" value={movie.rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {movie.rating}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    Released in {movie.year}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 0.5, width: "100%", flexWrap: "wrap" }}>
                    {movie.genre.map((tag, i) => (
                        <Chip label={tag} size="small" color="primary" key={i} />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export const MovieMain = ({ movie }) => {
    const styles = { display: "flex", gap: 2 };
    const width = window.innerWidth;
    const desktop = width > 700;
    console.log(desktop, width);

    return (
        <Card>
            <CardContent sx={desktop ? { ...styles } : {}}>
                <Box sx={{ minWidth: desktop ? 300 : 150 }}>
                    <Typography
                        gutterBottom
                        variant={desktop ? "h3" : "h5"}
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em" }}
                    >
                        {movie.title}
                    </Typography>
                    <Box sx={desktop ? {} : { display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Typography variant="body2" color="text.secondary">
                            Directed By
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                            {movie.director}
                        </Typography>
                    </Box>
                </Box>

                {1 && <Divider sx={{ my: 1.5 }} />}

                <Box>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap" }}>
                        <Rating
                            name="read-only"
                            value={(movie.rating * 5) / 10}
                            precision={0.5}
                            readOnly
                            size="small"
                        />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        Released in {movie.year}
                    </Typography>
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {movie.genre.map((tag, i) => (
                            <Chip label={tag} size="small" color="primary" key={i} />
                        ))}
                    </Box>
                    <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
                        {movie.description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

const MovieCard = ({ movie }) => {
    return movie.actors ? <MovieMain movie={movie} /> : <MovieSmall movie={movie} />;
};
export default MovieCard;
