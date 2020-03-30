import React, {useState, useEffect} from "react"
export const RickAndMortyContext = React.createContext()


export default function RicknMortyProvider(props){
    const [charactersState, setCharactersState] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentEpisode,setCurrentEpisode] = useState(1)
    const [episodeState, setEpisodeState] = useState([])
    const [userInput, setUserInput] = useState({})

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
    function getChar(userInput){
        fetch(`https://rickandmortyapi.com/api/character/?name=${userInput}`)
        .then(response => response.json())
        .then(response => {
           
            setUserInput(response.results[0])
        })
        console.log("fired")
    }
  


    //create episode function

    function getEpisode(){
        fetch(`https://rickandmortyapi.com/api/episode/?page=${currentEpisode}`) 
        .then(response => response.json())
        .then(response => {
            console.log(response.results)
            setEpisodeState(prev => ([...prev, ...response.results]))
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        getEpisode()
    },[currentEpisode])

    function switchEpisode(){
        setCurrentEpisode(prev => {
            return prev + 1
        }) 
        
    }

    return(
        <RickAndMortyContext.Provider 
            value = {{userInput, charactersState, episodeState, getCharacters, switchPage, getEpisode, switchEpisode, getChar}}>
                {props.children}
        </RickAndMortyContext.Provider>
    )
}
    
            
            

                
            
  
    







            
    
   
       
    




