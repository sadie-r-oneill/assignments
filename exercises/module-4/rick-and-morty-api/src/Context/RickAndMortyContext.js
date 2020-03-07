import React, {useState} from "react"
export const RickAndMortyContext = React.createContext()


export default function RicknMortyProvider(props){
    const [characters, setCharacters] = useState([])
    const [name, setName] = useState([0])

        //get all characters
    function getCharacters(){
        fetch("https://rickandmortyapi.com/api/character/") 
        .then(response => response.json())
        .then(response => {
            setCharacters(prevState => {
                return [...prevState, ...response.results]
            })
        })
        .catch(err => console.log(err))
    }
        //get specific character

    function getChar(){
        fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(response => {
            setName(prevState => {
                return [...prevState, ...response.results]
            })
        })
                
            
    }
    return(
        <RickAndMortyContext.Provider value = {{...characters, getCharacters}}>
            {props.children}
        </RickAndMortyContext.Provider>
    )
}
  
    







            
    
   
       
    




