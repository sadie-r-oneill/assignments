const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


//middleware- function that fires on the in between
app.use(express.json()) //looks for a request body, turns json into javascript
app.use(morgan('dev')) //logs requests to the console

//connect to database
mongoose.connect('mongodb://localhost:27017/moviesdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    },
    () => console.log('connected to the database')
    )
 
//routes
app.use("/movies",require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

//error handler
app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Port //Callback function
app.listen(9000, (req,res) => {
    console.log("The server is running on Port 9000")
})