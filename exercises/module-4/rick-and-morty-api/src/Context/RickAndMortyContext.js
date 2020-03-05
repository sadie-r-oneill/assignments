import React, {useState} from "react"
import CharacterDisplay from "../CharacterDisplay"
export const RickAndMortyContext = React.createContext()


export default function RicknMortyProvider(props){
    const [RickAndMortyState, setRickAndMortyState] = useState({
        characters:[],
        // id:"",
        // name: "",
        // status: "",
        // species: "",
        // type: "",
        // gender: "",
    })



function getCharacter(){
    fetch("https://rickandmortyapi.com/api/character") 
    .then(response => response.json())
    .then(response => {
        setRickAndMortyState(prevState => {
            return {characters:[...prevState.characters, response.results]}
        })
    })
    .catch(err => console.log(err))
}

    return(
    <RickAndMortyContext.Provider value = {{...RickAndMortyState, getCharacter}}>
        {props.children}
        {RickAndMortyState.characters.map(char => <CharacterDisplay characterData={char}/>)}

    </RickAndMortyContext.Provider>

)

}
            
    
   
       
    




