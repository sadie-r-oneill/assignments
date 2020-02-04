import React from "react"
import Critter from "./Critter"

function Friend(props) {
    const petArr = props.myLittleFriend.pets.map(critter => <Critter critter={critter} />)
    return (
        <div className = "container">
            <h2 className = "myFriend">Friend: {props.myLittleFriend.name}</h2>
            <h2 className = "age">Age: {props.myLittleFriend.age}</h2>
            {petArr}
            
        </div>
    )
}
    


export default Friend