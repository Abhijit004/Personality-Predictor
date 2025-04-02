import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Rating, Divider, Button, CardActionArea, Slide, Dialog, Container, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import "./BookCard.css";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Book	Author	Description	Genres	Avg_Rating	Num_Ratings	URL

export const BookSmall = ({ book, selected, setSelected, index }) => {
    const [open, setOpen] = useState(false);
    const genres = book.Genres.substring(1, book.Genres.length - 1)
        .split(", ")
        .map((e) => e.substring(1, e.length - 1));
    return (
        <>
            <Card className="book-small-wrapper">
                <CardActionArea
                    data-active={selected ? "yes" : "no"}
                    onClick={() => setOpen(true)}
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
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mt: 1,
                                gap: 0.5,
                                width: "100%",
                                flexWrap: "wrap",
                            }}
                        >
                            {genres.map((genre, i) => (
                                <Chip label={genre} size="small" sx={{ bgcolor: "#0d47a1", color: "#fff" }} key={i} />
                            ))}
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mt: 2,
                                gap: 0.5,
                                width: "100%",
                                flexWrap: "wrap",
                            }}
                        >
                            {/* {book.Genres.map((tag, i) => (
                            <Chip label={tag} size="small" sx={{ color: "#fff", bgcolor: "var(--mui-blue)" }} key={i} />
                        ))} */}
                        </Box>
                        <a href={book.URL} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                sx={{ bgcolor: "#0d47a1", color: "#fff" }}
                            >
                                Send
                            </Button>
                        </a>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog
                onClose={() => setOpen(false)}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth={600}
            >
                <div className={"book-dialogue"}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                    <BookMain book={book} />
                </div>
            </Dialog>
        </>
    );
};

export const BookMain = ({ book }) => {
    const genres = book.Genres.substring(1, book.Genres.length - 1)
        .split(", ")
        .map((e) => e.substring(1, e.length - 1));
    return (
        <Card sx={{ p: 1 }} className="book-card-wrapper">
            <CardContent sx={{ color: "#fff" }}>
                <Box sx={{ width: 500 }}>
                    <Typography
                        gutterBottom
                        variant={"h5"}
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em", color: "#fff", overflowWrap: "break-word" }}
                    >
                        {book.Book}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.71)">
                            Written by
                        </Typography>
                        <Typography variant="body1" color="#fff" sx={{ fontWeight: 500 }}>
                            {book.Author}
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 1.5, border: "0.5px solid rgba(255, 255, 255, 50%)" }} />

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
                            Learn More
                        </Button>
                    </a>
                </Box>
            </CardContent>
        </Card>
    );
};
