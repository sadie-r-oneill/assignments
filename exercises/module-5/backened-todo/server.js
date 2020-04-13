const express = require("express")
const app = express()
const uuid = require("uuid/v4")
const morgan = require("morgan")

//middleware for every request
app.use(express.json())
app.use(morgan("dev"))//logs request to the console


//routes
app.use("/todos",require("./todos/todos.js"))

//Server Listen
app.listen(9000, () => {
    console.log("The server is successfully running on port 9000")
})

