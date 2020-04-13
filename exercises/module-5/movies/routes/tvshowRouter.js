const express = require("express")
const tvshowRouter = express.Router()
const uuid = require("uuid/v4")

const tvShows = [
    {title: "tiger king", _id:uuid()},
    {title: "rick and morty", _id:uuid()},
    {title:"friends", _id:uuid()},
    {title:"breaking bad", _id:uuid()}
]
// tvshowRouter.get("/", (req,res) => {
//     res.send(tvShows)
// })

// tvshowRouter.post("/tvshows", () => {
//     const newShow = req.body
//     newShow._id = uuid()
//     tvShows.push(newShow)
//     res.send(`Successfully added ${newShow.title} to the database`)
// })

tvshowRouter.route("/")
.get((req,res) => {
    res.send(tvShows)
})
.post((req,res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`Successfully added ${newshow.title} to the database!`)
})








module.exports = tvshowRouter