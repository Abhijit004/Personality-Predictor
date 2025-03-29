const express = require('express')
const movieController = require("../controllers/movieController")

const Router = express.Router()
Router.get("/", movieController.getMovies)

module.exports = Router