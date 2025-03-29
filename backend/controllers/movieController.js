const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const Movie = require("../models/movieModel")
const mongoose = require("mongoose");


exports.getMovies = catchAsync(async (req, res, next) => {
    try {

        console.log("This is request in movies:")
        console.log(req.body)
        // const filter = { type: { $in: [req.body.type] } };
        const filter = { MBTI: new RegExp(`^${req.query.type},`) };
        // const popular = await DB_CON.collection("popular_movies").find(filter).toArray();
        const movies = await Movie.find(filter)
                        .sort({ releaseYear: -1 })
                        .limit(10);

        return res.status(200).json({ movies });
    } catch (error) {
        console.error("Error fetching movies:", error);
        return res.status(500).json({ error: error.message, stack: JSON.stringify(error.stack) });
    }
});