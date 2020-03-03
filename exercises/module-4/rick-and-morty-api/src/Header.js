import React from "react"
import styled from "styled-components"
import styles from "./styles.css"

const StyledHeader = styled.h1`
    display:flex;
    justify-content:center;
    font-size:100px;
    margin:5%;
    font-family: ricknmorty;
    color: rgb(65, 155, 146);
    text-shadow: 6px 6px  rgb(7, 244, 82);
    

`

export default function Header(){
    return(
        <StyledHeader>Rick and Morty</StyledHeader>
    )
}