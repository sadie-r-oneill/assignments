const express = require("express")
const bountyHunter = express.Router()
const uuid = require("uuid/v4")
//data

const bounties = [
    {name:"Steve", isAlive:true, amount:4, type:"Sith", _id:uuid()},
    {name:"Gustavo", isAlive:true, amount:4, type:"Jedi", _id:uuid()},
    {name:"Nathan", isAlive:false, amount:7, type: "Jedi", _id:uuid()}

]

//routes
//get all

bountyHunter.get("/",(req,res) => {
    res.send(bounties)
})

//get one by id 

bountyHunter.get("/:bountyId",(req,res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounties => bounties._id === bountyId)
    res.send(foundBounty)
})

//get one by type

bountyHunter.get("/search/type", (req,res) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounties => bounties.type === type)
    res.send(filteredBounties)
})

//post one

bountyHunter.post("/",(req,res) => {
    const newBounty = req.body
    newBounty_id = uuid()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName + newBounty.lastName} to the database!`)
})

//delete one

bountyHunter.delete("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId 
    const bountyIndex = bounties.findIndex(bounty => bounties._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("You have successfully deleted a bounty!")
})

//update one

bountyHunter.put("/:bountyId",(req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounties._id === bountyId)
    const updatedBounty = Object.assign(bounties,[bountyIndex], req.body)
    res.send(updatedBounty)
})



module.exports = bountyHunter