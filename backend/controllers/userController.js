const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/UserModel");
const { getPersonalityTypes } = require("../utils/getPersonalityType");

exports.updateUser = catchAsync(async (req, res, next) => {
    try {
        const text = req.body.text;
        const mbti_res = await getPersonalityTypes(text);
        const newUser = await User.findOneAndUpdate(
            { _id: req.body._id },
            {
                $set: {
                    mbti: mbti_res.predictions,
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

exports.getMatchingUsers = catchAsync(async (req, res, next) => {
    try {
        const mbti = req.query.mbti;
        if (!mbti) {
            return res.status(400).json({message: "error: no mbti provided"});
        }
        const matches = await User.find({ mbti: mbti });

        res.status(200).json({
            status: "success",
            matches: matches
        });
    } catch (err) {
        next(err);
    }
});
