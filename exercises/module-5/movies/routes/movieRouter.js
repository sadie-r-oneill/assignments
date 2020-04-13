const express = require("express")
const movieRouter = express.Router()
const Movie = require('../models/movie.js')


//get all  // .find()
movieRouter.get("/", (req,res,next) => {
    Movie.find((err,movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//Post //.save()
movieRouter.post('/',(req,res,next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// movieRouter.get("/:movieId",(req,res) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     res.send(foundMovie)
// })
// //get one by genre
// movieRouter.get("/search/genre",(req,res) => {
//     const genre = req.query.genre
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     res.send(filteredMovies)
// })

//delete one
movieRouter.delete("/:movieId",(req,res,next) => {
    Movie.findOneAndDelete({_id: req.params.movieId},(err, deletedItem) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database!`)
    })
})


//update one // 4 args

movieRouter.put("/:movieId", (req,res,next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId }, //find this one to update
        req.body, //update the object with this data
        {new : true}, //send back the updated version
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        } 
    )
})
        



module.exports = movieRouter