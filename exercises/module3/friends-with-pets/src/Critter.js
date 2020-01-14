import React from "react"

function Critter(props) {
    return (

    <div className = "container-2">  
        <h2 className = "petName">Pet Name: {props.critter.name}</h2>
        <h2 className = "breed">Breed: {props.critter.breed}</h2>
          
    </div>    
    )
}

export default Critter