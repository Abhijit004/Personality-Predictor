import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Rating, Divider, Button } from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';

// Book	Author	Description	Genres	Avg_Rating	Num_Ratings	URL

export const BookSmall = ({ book }) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, lineHeight: "1.2em" }}>
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
                    <Rating name="read-only" value={book.Avg_Rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {book.Avg_Rating}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 0.5, width: "100%", flexWrap: "wrap" }}>
                    {book.Genres.map((tag, i) => (
                        <Chip label={tag} size="small" color="primary" key={i} />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export const BookMain = ({ book }) => {
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
                        {book.Book}
                    </Typography>
                    <Box sx={desktop ? {} : { display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Typography variant="body2" color="text.secondary">
                            Written by
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                            {book.Author}
                        </Typography>
                    </Box>
                </Box>

                {1 && <Divider sx={{ my: 1.5 }} />}
                {desktop && <Divider orientation="vertical" variant="middle" flexItem />}

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
                    <Typography variant="body2" color="text.secondary">
                        {book.Num_Ratings}+ Users
                    </Typography>
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1, gap: 0.5, width: "100%", flexWrap: "wrap" }}
                    >
                        {book.Genres.map((tag, i) => (
                            <Chip label={tag} size="small" color="primary" key={i} />
                        ))}
                    </Box>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
                        {book.Description}
                    </Typography>
                    <Button variant="contained" endIcon={<SendIcon />} sx = {{mt: 3}}>
                        Send
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};
