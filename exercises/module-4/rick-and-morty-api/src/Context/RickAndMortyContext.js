import React, {useState, useEffect} from "react"
export const RickAndMortyContext = React.createContext()


export default function RicknMortyProvider(props){
    const [charactersState, setCharactersState] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const [name, setName] = useState([0])

        //get all characters

    function getCharacters(){
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`) 
        .then(response => response.json())
        .then(response => {
            console.log(response.results)
            setCharactersState(prev => ([...prev, ...response.results]))
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        getCharacters()
    },[currentPage])

    function switchPage(){
        setCurrentPage(prev => {
            return prev + 1
        }) 
        
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
        <RickAndMortyContext.Provider value = {{charactersState, getCharacters,switchPage}}>
            {props.children}
        </RickAndMortyContext.Provider>
    )
}
                
            
  
    







            
    
   
       
    




