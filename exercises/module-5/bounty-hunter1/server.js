const express = require("express")
const app = express()
const uuid = require("uuid/v4")

//middleware for every request
app.use(express.json())

//data


//routes
app.use("/bounties",require("./routes/bountyHunter.js"))

//Server Listen
app.listen(9000, () => {
    console.log("The server is successfully running on port 9000")
})