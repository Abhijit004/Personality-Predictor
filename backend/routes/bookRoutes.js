const express = require('express')
const bookController = require("../controllers/bookController")

const Router = express.Router()
Router.get("/", bookController.getBooks)

module.exports = Router