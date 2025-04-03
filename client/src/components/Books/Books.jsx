import React, { useEffect, useState } from "react";
import { Card, Divider, Box, CardContent } from "@mui/material";
import { BookSmall, BookMain } from "../BookCard/BookCard";

const Books = ({ data }) => {
    const [selected, setSelected] = useState(-1);
    return (
        <Card elevation={0} className="cardcontent">
            {data.length > 0 ? (
                <CardContent className="cardcontent">
                    More Books that you may like
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "start",
                            mt: 1,
                            gap: 2,
                            p: 0,
                            flexWrap: "wrap",
                            "& > *": {
                                minWidth: 300,
                                flexGrow: 1,
                                flexBasis: 300,
                            },
                        }}
                    >
                        {data.map((book, i) => (
                            <BookSmall
                                book={book}
                                setSelected={setSelected}
                                key={book._id}
                                index={i}
                                selected={selected === i}
                            />
                        ))}
                    </Box>
                </CardContent>
            ) : (
                <p> No Books Found</p>
            )}
        </Card>
    );
};

export default Books;
