import React, { useContext, useEffect } from "react"
import {RickAndMortyContext} from './Context/RickAndMortyContext'


export default function OneCharacter(props){
    console.log(props)
    const {userInput, getChar, inputs} = useContext(RickAndMortyContext)
    useEffect(() => {
        getChar(props.match.params.character)
    },[])
    return(
        <div>
            <h2>name={userInput.name} </h2>
            <h2>status ={userInput.status}</h2>
            {/* <h2>species = {userInput.species}</h2> */}
            <h2>type = {userInput.type}</h2>
            <h2>gender = {userInput.gender}</h2>
            {/* <h2>origin = {userInput.origin}</h2> */}
            <image>imageURL = {userInput.image}</image>
        </div>
    )
}