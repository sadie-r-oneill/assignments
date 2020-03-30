const express = require("express")
const todos = express.Router()
const uuid = require("uuid/v4")

//data
const todos = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: "23k4lh23h2"
    }
]

//routes //GET
todos.get("/",(req,res) => {
    res.send(todos)
})

//get one by id 

todos.get("/:todoId",(req,res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todos => todos._id === todoId)
    res.send(foundTodo)
})


//post todo item

todos.post("/",(req,res) => {
    const newItem = req.body
    newItem_id = uuid()
    todos.push(newItem)
    res.send(`Successfully added ${newItem.name} to the database!`)
})