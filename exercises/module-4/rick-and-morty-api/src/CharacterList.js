import React, {useContext} from "react"
import {RickAndMortyContext} from './Context/RickAndMortyContext'
import CharacterDisplay from './CharacterDisplay'

export default function CharacterList(){
    const value = useContext(RickAndMortyContext)
    return(
        <div>
            {value.characters.map(char => <CharacterDisplay CharacterData={char}/>)}
        </div>
    )
}
           