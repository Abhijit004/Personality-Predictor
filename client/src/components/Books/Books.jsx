import React, { useState } from "react";
import { Card, Divider, Box } from "@mui/material";
import { BookSmall, BookMain } from "../BookCard/BookCard";
// Book	Author	Description	Genres	Avg_Rating	Num_Ratings	URL
const book = {
    Book: "The Shawshank Redemption",
    Avg_Rating: 9.3,
    Author: "Frank Darabont",
    Num_Ratings: 2500000,
    Description:
        "Two imprisoned men bond over a number of years Two imprisoned men bond over a number of years Two imprisoned men bond over a number of years...",
    Genres: ["Action", "Drama", "Adventure", "Thriller"],
};
// movie_id	movie_name	year	certificate	runtime	genre	rating	description	director	director_id	star	star_id	votes	gross(in $)

/* tt9114286	Black Panther: Wakanda Forever	2022	PG-13	161 min	Action, Adventure, Drama	6.9	The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.	Ryan Coogler	/name/nm3363032/	"Letitia Wright, 
Lupita Nyong'o, 
Danai Gurira, 
Winston Duke"	/name/nm4004793/,/name/nm2143282/,/name/nm1775091/,/name/nm6328300/	204835*/

const Books = () => {
    const t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [selected, setSelected] = useState(0);
    return (
        <Card elevation={0}>
            <BookMain book={book} />
            <Divider sx={{ my: 1.5 }} />
            More Books that you make like
            <Box sx = {{height: 400, overflowY: 'scroll'}}>
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
                        <BookSmall book={book} setSelected={setSelected} key={i} index={i} selected={selected === i} />
                    ))}
                </Box>
            </Box>
        </Card>
    );
};

export default Books;
