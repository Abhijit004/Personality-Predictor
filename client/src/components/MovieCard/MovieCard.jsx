import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Slide, Dialog, Divider, CardActionArea, IconButton, Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./MovieCard.css";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const MovieSmall = ({ movie, selected, setSelected, index }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Card className="movie-small-wrapper">
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
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ fontWeight: 600, lineHeight: "1.2em" }}
                        >
                            {movie.Title}
                        </Typography>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                Directed By
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {movie.Director}
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                                Cast
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {movie.Cast}
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        {/* <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
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
                    </Box> */}
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            Released in {movie["Release Year"]}
                        </Typography>
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
                            {movie.Genre.split(",").map((tag, i) => (
                                <Chip
                                    label={tag}
                                    size="small"
                                    sx={{ bgcolor: "var(--mui-orange)", color: "#fff" }}
                                    key={i}
                                />
                            ))}
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <a href={movie["Wiki Page"]} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                sx={{ bgcolor: "#bf360c", color: "#fff" }}
                            >
                                Know More
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
                <div className={"movie-dialogue"}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                    <MovieMain movie={movie} />
                </div>
            </Dialog>
        </>
    );
};

export const MovieMain = ({ movie }) => {
    const styles = { display: "flex", gap: 2 };
    const width = window.innerWidth;
    const desktop = false;

    return (
        <Card sx={{ p: 1 }} className="movie-card-wrapper">
            <CardContent sx={desktop ? { ...styles } : {}}>
                <Box sx={{ minWidth: desktop ? 300 : 150 }}>
                    <Typography
                        gutterBottom
                        variant={desktop ? "h3" : "h5"}
                        component="div"
                        sx={{ fontWeight: 600, lineHeight: "1.2em", color: "#fff", overflowWrap: "break-word" }}
                    >
                        {movie.Title}
                    </Typography>
                    <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                            Directed By
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500, color: "#fff" }}>
                            {movie.Director}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ color: "#fff", mt: 1 }}>
                            Starring
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500, color: "#fff" }}>
                            {movie.Cast}
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
                    {/* <Box sx={{ display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap" }}>
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
                    </Box> */}
                    <Typography variant="body2" color="text.primary" sx={{ color: "#fff" }}>
                        Released in {movie["Release Year"]}
                    </Typography>
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {movie.Genre.split(",").map((tag, i) => (
                            <Chip label={tag} size="small" sx={{ bgcolor: "#bf360c", color: "#fff" }} key={i} />
                        ))}
                    </Box>
                    <Divider sx={{ my: 1.5, border: "0.5px solid rgba(255, 255, 255, 50%)" }} />
                    <Typography variant="body1" color="text.primary" sx={{ mt: 2, color: "#fff" }}>
                        {movie.Plot.slice(0, 500)}
                        {movie.Plot.length > 500 ? "..." : ""}
                    </Typography>
                </Box>
                <a href={movie["Wiki Page"]} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{ bgcolor: "#bf360c", color: "#fff", mt: 2 }}
                    >
                        Know More
                    </Button>
                </a>
            </CardContent>
        </Card>
    );
};
