const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const { getPersonalityTypes } = require("../utils/getPersonalityType");

exports.updateUser = catchAsync(async (req, res, next) => {
    try {
        const text = req.body.text;
        const mbti_res = await getPersonalityTypes(text);
        const newUser = await User.findOneAndUpdate(
            { _id: req.body._id },
            {
                $set: {
                    mbti: mbti_res.predictions
                },
            },
            { new: true, runValidators: true } // Get the updated document
        );

        if (!newUser) {
            return res.status(404).json({ message: "User not found" });
        } else {
            console.log(newUser);
        }

        return res.status(200).json({ message: "success", mbti: mbti_res.predictions });
    } catch (err) {
        console.log(err.message);
        next(err);
    }
});
