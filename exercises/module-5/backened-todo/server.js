const express = require("express")
const app = express()
const uuid = require("uuid/v4")

//middleware for every request
app.use(express.json())


//routes
app.use("/todos",require("./todos/todos.js"))

//Server Listen
app.listen(9000, () => {
    console.log("The server is successfully running on port 9000")
})

