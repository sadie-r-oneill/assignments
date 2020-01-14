import React from "react"
import Critter from "./Critter"

function Friend(props) {
    const petArr = props.Friend.pets.map(critter => <Critter critter={critter} />)
    return (
        <div className = "container">
            <h2 className = "myFriend">Friend: {props.Friend.name}</h2>
            <h2 className = "age">Age: {props.Friend.age}</h2>
            {petArr}
            
        </div>
    )
}
    


export default Friend