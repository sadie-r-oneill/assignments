import React from "react"
import styled from "styled-components"
import styles from "./styles.css"

const StyledHeader = styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:100px;
    height:20vh;
    font-family: ricknmorty;
    color:rgb(65, 135, 128);
    text-shadow: 8px 8px rgb(7, 244, 82);
    @media(max-width:400px){
        font-size:40px;
        text-shadow: 4px 4px  rgb(7, 244, 82);
    }
`
export default function Header(){
    return(
        <StyledHeader>Rick and Morty!</StyledHeader>
    )
}
