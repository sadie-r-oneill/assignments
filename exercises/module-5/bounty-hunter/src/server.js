const express = require("express")
const app = express()
const uuid = require("uuid/v4")

//middleware for every request
app.use(express.json())

//data
const bounties = [{
    firstName:"",
    lastName:"",
    isAlive:true,
    amount:0,
    type:"",
    _id:uuid()
}]

//routes
//get all
app.get("/bounties",(req,res) => {
    res.send(bounties)
})

//post one
app.post("/bounties",(req,res) => {
    const newBounty = req.body
    newBounty_id = uuid()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName + newBounty.lastName} to the database!`)
})

//Server Listen
app.listen(9000, () => {
    console.log("The server is successfully running on port 9000")
})