const express = require("express")
const app = express()

const homeRoute = require("./api/routes/home.route")

app.use(express.json())

app.use("/api/v1/home", homeRoute)

const port = 5000

app.listen(port, () => console.log(`api running on ${port} `))

module.exports = app
