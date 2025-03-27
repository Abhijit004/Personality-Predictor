const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String
    },
    mbti: {
        type: [String]
    }
},
    { timestamps: true }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
