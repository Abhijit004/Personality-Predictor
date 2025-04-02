const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

app.use(express.json()); // <- Parses Json data
app.use(express.urlencoded({ extended: true, limit: "500mb" })); // <- Parses URLencoded data

dotenv.config(); // <- connecting the enviroment variables
// MIDLEWARES ->>
app.enable('trust proxy');

// const CLIENT_URL = process.env.CLIENT_URL;
// const ADMIN_URL = process.env.ADMIN_URL;
const allowedOrigins = ["http://localhost:5173", "https://vibesphere-mbti.vercel.app"];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            const error = new Error("Not allowed by CORS");
            console.log(error);
            console.log(origin)
            callback(error);
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(morgan("dev")); // <- Logs res status code and time taken

app.use((req, res, next) => {
    // <- Serves req time and cookies
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    if (req.cookies) console.log(req.cookies);
    next();
});

app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
});
// Routers for app
const router = require("./routes/mainRoutes");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const bookRouter = require("./routes/bookRoutes");
// setting Routes
app.use("/api/v1/", router);
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/user/", userRouter);
app.use("/api/v1/movie/", movieRouter);
app.use("/api/v1/book/", bookRouter);
// app.use("/api/v1/event/", eventRouter);
// app.use("/api/v1/eventreg/", userEnrollRouter);

// app.all('*', (req, res, next) => {	// <- Middleware to handle Non-existing Routes
// 	return res.statusCode(404).json({
//         success: 'false',
//         status: 404,
//         message: 'Route not found in server',
//     })
// });

app.use(errorHandler); // <- Error Handling Middleware

module.exports = app;
