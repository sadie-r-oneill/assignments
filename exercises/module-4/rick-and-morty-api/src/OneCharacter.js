import React, { useContext, useEffect } from "react"
import {RickAndMortyContext} from './Context/RickAndMortyContext'


export default function OneCharacter(props){
    console.log(props)
    const {userInput, getChar, inputs} = useContext(RickAndMortyContext)
    useEffect(() => {
        getChar(props.match.params.character)
    },[])
    return(
        <div className = "oneChar">
            <h2>name:{userInput.name} </h2>
            <h2>status:{userInput.status}</h2>
            <h2>type: {userInput.type}</h2>
            <h2>gender: {userInput.gender}</h2>
            <img src = {userInput.image} />
        </div>
    )
}