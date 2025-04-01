import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Rating, Divider, Button, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import "./BookCard.css";
import { blue } from "@mui/material/colors";

// Book	Author	Description	Genres	Avg_Rating	Num_Ratings	URL

export const BookSmall = ({ book, selected, setSelected, index }) => {
    return (
        <Card className="book-small-wrapper">
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
                <CardContent sx={{ p: 3 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em", position: "relative" }}
                    >
                        {book.Book}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Typography variant="body2" color="text.secondary">
                            Written By
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                            {book.Author}
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                        {book.Num_Ratings}+ Users
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <Rating
                            name="read-only"
                            value={book.Avg_Rating}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ color: "var(--mui-blue)" }}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            {book.Avg_Rating}
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 1.5 }} />
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {/* {book.Genres.map((tag, i) => (
                            <Chip label={tag} size="small" sx={{ color: "#fff", bgcolor: "var(--mui-blue)" }} key={i} />
                        ))} */}
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const BookMain = ({ book }) => {
    console.log(book);
    const styles = { display: "flex", gap: 2 };
    const width = window.innerWidth;
    const desktop = width > 700;
    const genres = book.Genres.substring(1, book.Genres.length - 1)
        .split(", ")
        .map((e) => e.substring(1, e.length - 1));
    console.log(genres);

    return (
        <Card sx={{ p: 1 }} className="book-card-wrapper">
            <CardContent sx={desktop ? { ...styles, color: "#fff" } : { color: "#fff" }}>
                <Box sx={{ minWidth: desktop ? 300 : 150 }}>
                    <Typography
                        gutterBottom
                        variant={desktop ? "h3" : "h5"}
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em", color: "#fff" }}
                    >
                        {book.Book}
                    </Typography>
                    <Box sx={desktop ? {} : { display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.71)">
                            Written by
                        </Typography>
                        <Typography variant="body1" color="#fff" sx={{ fontWeight: 500 }}>
                            {book.Author}
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
                            value={(book.Avg_Rating * 5) / 10}
                            precision={0.5}
                            readOnly
                            size="small"
                        />
                    </Box>
                    <Typography variant="body2" color="#fff">
                        {book.Num_Ratings}+ Users
                    </Typography>
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {/* book.Genres = JSON.parse(book.Genres.replace(/'/g, `"`));
                        console.log(book.Genres); */}
                        {/* let genresStr = book.Genres.replace(/[\[\]']/g, "");
                        const genres = genresStr.split(", "); */}
                        {/* let i=0;
                        for (let genre of genres) {
                            console.log(genre) // Prints each genre as a separate value
                            {<Chip label={genre} size="small" sx={{ bgcolor: "#0d47a1", color: "#fff" }} key={i} />}
                            i++
                        } */}
                        {genres.map((genre, i) => (
                            <Chip label={genre} size="small" sx={{ bgcolor: "#0d47a1", color: "#fff" }} key={i} />
                        ))}
                    </Box>
                    <Divider sx={{ my: 1.5, border: "0.5px solid rgba(255, 255, 255, 50%)" }} />
                    <Typography variant="body1" color="text.primary" sx={{ mt: 2, color: "#fff" }}>
                        {book.Description.slice(0, 500)}
                        {book.Description.length > 500 ? "..." : ""}
                    </Typography>
                    <a href={book.URL} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={{ mt: 3, bgcolor: "#0d47a1", color: "#fff" }}
                        >
                            Send
                        </Button>
                    </a>
                </Box>
            </CardContent>
        </Card>
    );
};
