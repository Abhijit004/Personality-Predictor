const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        "Book": {
            type: String,
            required: true
        },
        "Author": {
            type: String,
            required: true
        },
        "Description": {
            type: String
        },
        "Genres":
        {
            type: String
        },
        "Avg_Rating": {
            type: Number
        },
        "Num_Ratings": {
            type: String
        },
        "URL": {
            type: String,
        },
        "MBTI": {
            type: String
        }



    },
    { timestamps: true }

);

module.exports = mongoose.model("Book", bookSchema);