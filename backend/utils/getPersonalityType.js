const axios = require("axios");

const MBTI_URL = "https://personality-predictor-mtm1.onrender.com/predict";
exports.getPersonalityTypes = async (text) => {
    try {
        const predict = await axios.post(
            MBTI_URL,
            { text },
            { headers: { "Content-Type": "application/json" } }
        );
        return predict
    } catch (err) {
        console.log(err.message)
        throw new Error("MBTI Fetching Failed");
    }
};
