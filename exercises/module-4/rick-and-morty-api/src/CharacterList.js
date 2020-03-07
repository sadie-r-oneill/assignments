import React, {useContext} from "react"
import {RickAndMortyContext} from './Context/RickAndMortyContext'
import CharacterDisplay from './CharacterDisplay'

export default function CharacterList(){

    return(
        <div>
            <CharacterDisplay />
        </div>
    )
}
    
    
           