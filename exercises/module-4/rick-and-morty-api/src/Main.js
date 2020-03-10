import React, {useContext, useState} from "react"
import styled from "styled-components"
import {RickAndMortyContext} from "./Context/RickAndMortyContext"
import {Link, Route} from "react-router-dom"

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
    const {getChar} = useContext(RickAndMortyContext)
    const [inputs, setInputs] = useState("")  
    
    const handleChange = (e) => {
        const {value} = e.target
        setInputs(value)
    }

    return(
        <div>
            <Photo />
                <form className = "newForm">
                    <h1 className = "charSearch">Search characters</h1>
                    <input onChange = {handleChange} 
                        className = "input1" 
                        placeholder = "search character" 
                        type = "text" 
                        name = "characters" 
                        value = {inputs}>
                    </input>
                    <Link to = {`/OneCharacter/${inputs}`}>
                        <button className = "button1">See Character!</button>
                    </Link>
                    
                </form>
        </div>
    )
                    
}
    
                        

               
                
                
    


   





