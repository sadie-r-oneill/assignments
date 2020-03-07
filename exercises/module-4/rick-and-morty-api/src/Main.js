import React, {useContext, useEffect, useState} from "react"
import styled from "styled-components"
import {RickAndMortyContext} from "./Context/RickAndMortyContext"

const Photo = styled.div`
    display:flex;
    justify-content:center;
    background-image:url("https://static.highsnobiety.com/thumbor/m_RQFJgji5fGd8Ub2bTRiJntWUk=/fit-in/800x480/smart/static.highsnobiety.com/wp-content/uploads/2019/05/15182639/rick-morty-season-4-release-date-feature.jpg");
    height:480px;
    width: 800px;
    margin-left:20%;
    border-radius:5%;
    box-shadow: 10px 10px yellow;

`
export default function Char(){
    const {getCharacters, characters} = useContext(RickAndMortyContext)
    const [inputs, setInputs] = useState({
        characters: '',
        episode: ''
    })-

    useEffect(()=> {
        getCharacters()
    },[])
   
    const handleSubmit = (e) => {
        e.preventDefault()

    }   

    const handleChange = (e) => {
        const{name,value} = e.target
        setInputs(prevState => {
            return (
                {...prevState, [name]:value}
                )
            })
        }
                
    

    return(
        <div>
            <Photo />
            <form className = "newForm" onSubmit = {handleSubmit}>
                <h1 className = "charSearch">Search characters</h1>
                {/* connect handleChange to your inputs */}
                <input onChange ={handleChange} className = "input1" placeholder = "search character" type = "text" name = "character" value = {inputs.characters}></input>
                <button className = "button1">See Character!</button>
                <h1 className = "episodeSearch">Search Episodes</h1>
                <input onChange ={handleChange} className = "input2" placeholder = "search episode" type = "text" name = "episode" value = {inputs.episode} ></input>
                <button className = "button2">See Episode!</button>
            </form>
        </div>
           
    )
            
    
}

   





