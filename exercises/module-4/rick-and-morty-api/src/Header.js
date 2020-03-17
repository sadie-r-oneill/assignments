import React from "react"
import styled from "styled-components"
import styles from "./styles.css"

const StyledHeader = styled.h1`
   
    
    @media(max-width:400px){
        display:flex;
        justify-content:center;
        margin-left:auto;
        margin-right:auto;
        font-size:25px;
        text-shadow: 4px 4px  rgb(7, 244, 82);
        font-family: ricknmorty;
        color:rgb(65, 135, 128);
    }
   
    @media(min-width:600px){
        display:flex;
        justify-content:center;
        margin-top:3%;
        align-items:center;
        height:15vh;
        font-size:60px;
        text-shadow: 4px 4px  rgb(7, 244, 82);
        font-family: ricknmorty;
        color:rgb(65, 135, 128);

    }
    @media(max-width:600px){
        display:flex;
        justify-content:center;
        margin-top:3%;
        height:15vh;
        font-size:40px;
        font-family: ricknmorty;
        color:rgb(65, 135, 128);
        text-shadow: 4px 4px rgb(7, 244, 82);
    }
    @media(min-width:1000px){
        display:flex;
        justify-content:center;
        font-size:100px;
        height:15vh;
        font-family: ricknmorty;
        color:rgb(65, 135, 128);
        text-shadow: 8px 8px rgb(7, 244, 82);
    }
`
export default function Header(){
    return(
        <StyledHeader>Rick and Morty!</StyledHeader>
    )
}
