import React, {useContext} from 'react'
import {RickAndMortyContext} from './Context/RickAndMortyContext'
export default function CharacterDisplay(props){
    const { name, status, species, type, gender } = props.characterData
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}