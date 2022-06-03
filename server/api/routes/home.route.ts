const express = require("express")
const router = express.Router()

const { homeRoute } = require("../../controllers/home.controller")

router.route("/").get(homeRoute)

module.exports = router

export {}
