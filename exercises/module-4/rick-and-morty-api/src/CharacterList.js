import React, {useContext} from "react"
import {RickAndMortyContext} from './Context/RickAndMortyContext'
import CharacterDisplay from './CharacterDisplay'
import {Link, Switch, Route} from "react-router-dom"


export default function CharacterList(){
    const {charactersState, switchPage} = useContext(RickAndMortyContext)
    
    return(
        <div>
            {charactersState && charactersState.map(char => {
                return(
                    <CharacterDisplay key = {char.id} 
                    name={char.name} 
                    status ={char.status}
                    species = {char.species}
                    type = {char.type}
                    gender = {char.gender}
                    origin = {char.origin}
                    imageURL = {char.image}
                    />
                )
            })}
            
            <button onClick = {() => switchPage()} className = "nextPage">Load More!</button>
        </div>
    )
}


      
                
                    
                    
    
    
           