const express = require('express')
const userController = require("../controllers/userController")

const Router = express.Router()
Router.patch("/update", userController.updateUser)

module.exports = Router