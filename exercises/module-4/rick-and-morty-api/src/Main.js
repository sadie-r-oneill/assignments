import React, {useContext} from "react"
import styled from "styled-components"
import {Link, Switch, Route} from "react-router-dom"
import {RickAndMortyContext} from "./Context/RickAndMortyContext"

const Photo = styled.div`
    display:flex;
    justify-content:center;
    background-image:url("https://static.highsnobiety.com/thumbor/m_RQFJgji5fGd8Ub2bTRiJntWUk=/fit-in/800x480/smart/static.highsnobiety.com/wp-content/uploads/2019/05/15182639/rick-morty-season-4-release-date-feature.jpg");
    height:480px;
    width: 800px;
    margin-left:20%;
    border-radius:5%;

`
export default function Char(){
    const {getCharacter} = useContext(RickAndMortyContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        getCharacter()
    }   

    // const getCharacter = arr => {
    //     for(let i = 0; i <arr.length; i ++){
    //         const h1 = document.createElement("h1")
    //         h1.textContent = arr[i].name
    //     }
    // }
    return(
        <div>
            <form className = "newForm" onSubmit = {handleSubmit}>
                <input type = "radio" value = "character" name ="character"></input>
                {/* <input type = "radio" value = "location" name ="location"></input>
                <input type = "radio" value = "episode" name ="episode"></input> */}
                <button>SUBMIT</button>
            </form>
            <Photo />
        </div>
    )
            
    
}

   





