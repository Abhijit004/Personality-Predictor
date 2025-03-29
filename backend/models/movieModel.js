const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    "Release year": { type: Number, required: true },  // CamelCase & required
    "Title": { type: String, required: true },
    "Origin/Ethnicity": { type: String },
    "Director": { type: String },
    "Cast": { type: String },  // Consider storing as an array if multiple actors
    "Genre": { type: String },
    "Wiki Page": { type: String },
    "Plot": { type: String },
    "MBTI": { type: String },  // Consider making this an array if multiple MBTI types
}, { timestamps: true }); // Adds createdAt & updatedAt fields

module.exports = mongoose.model("Movie", movieSchema);
