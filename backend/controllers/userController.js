const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");

exports.updateUser = catchAsync(async (req, res, next) => {
    try {
        // Update user and get the old document before update
        const newUser = await User.findOneAndUpdate(
            { _id: req.body._id },
            { $set: req.body },
            { new: true, runValidators: true } // Get old data before updating
        );

        if (!newUser) {
            return res.status(404).json({ message: "User not found" });
        } else {
            console.log(oldUser);
        }

        return res.status(200).json({ message: "success" });
    } catch (err) {
        console.log(err.message);
        next(err);
    }
});