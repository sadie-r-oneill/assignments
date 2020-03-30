const express = require("express")
const app = express()
const uuid = require("uuid/v4")

//Middleware - a function that fires on the in between

app.use(express.json())
//Database
const movies = [
    
    { title: "The Placenta Cookbook", genre:"documentary",_id:uuid()},
    { title: "The Gift of Placenta", genre:"fantasy",_id:uuid()},
    { title:"Revenge of the Placenta", genre:"horror",_id:uuid()},
    { title: "The Placenta Club", genre:"children and family",_id:uuid()}
]
//Routes
app.get("/movies"), (req,res) => {
    res.send(movies)
}
app.post("/movies", (req,res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database!`)
})

//Server Listen
app.listen(9000,() => {
    console.log("The Server is Running on port 9000")
})