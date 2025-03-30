const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const Book = require("../models/bookModel")
const mongoose = require("mongoose");


exports.getBooks = catchAsync(async (req, res, next) => {
    try {

        console.log("This is request in books:")
        console.log(req.body)
        // const filter = { type: { $in: [req.body.type] } };
        const filter = req.query.type ? { MBTI: new RegExp(`^${req.query.type},`) } : {};
        const books = await Book.find(filter)
            //.sort({ Avg_Rating: -1 })
            .limit(10);

        return res.status(200).json({ books });
    } catch (error) {
        console.error("Error fetching books:", error);
        return res.status(500).json({ error: error.message, stack: JSON.stringify(error.stack) });
    }
});