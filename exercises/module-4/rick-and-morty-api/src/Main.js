import React, {useContext, useState} from "react"
import styled from "styled-components"
import {RickAndMortyContext} from "./Context/RickAndMortyContext"
import {Link, Route} from "react-router-dom"

const Photo = styled.div`
    display:flex;
    justify-content:center;
    background-image:url("https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Frick-and-morty-season-4-dan-harmon-justin-roiland-interview-0-1.jpg");
    background-size:cover;
    border-radius:5%;
    box-shadow: 10px 10px yellow;
    margin-left:auto;
    margin-right:auto;
    height:720px;
    width:1200px;
    @media(max-width:600px){
        height:240px;
        width:400px;
    }
   

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
    
                        

               
                
                
    


   





