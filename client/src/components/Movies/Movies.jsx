import React from "react";
import { Card, Divider, Box } from "@mui/material";
import { MovieMain, MovieSmall } from "../MovieCard/MovieCard";
const movie = {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    gross: 28341469,
    votes: 2500000,
    description:
        "Two imprisoned men bond over a number of years Two imprisoned men bond over a number of years Two imprisoned men bond over a number of years...",
    genre: ["Action", "Drama", "Adventure", "Thriller"],
};
// movie_id	movie_name	year	certificate	runtime	genre	rating	description	director	director_id	star	star_id	votes	gross(in $)

/* tt9114286	Black Panther: Wakanda Forever	2022	PG-13	161 min	Action, Adventure, Drama	6.9	The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.	Ryan Coogler	/name/nm3363032/	"Letitia Wright, 
Lupita Nyong'o, 
Danai Gurira, 
Winston Duke"	/name/nm4004793/,/name/nm2143282/,/name/nm1775091/,/name/nm6328300/	204835*/

const Movies = () => {
    const t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Card elevation={0}>
            <MovieMain movie={movie} />
            <Divider sx={{ my: 1.5 }} />
            More Movies that you make like
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    gap: 2,
                    flexWrap: "wrap",
                    "& > *": {
                        minWidth: 300,
                        flexGrow: 1,
                        flexBasis: 300,
                    },
                }}
            >
                {t.map((e, i) => (
                    <MovieSmall movie={movie} />
                ))}
            </Box>
        </Card>
    );
};

export default Movies;
