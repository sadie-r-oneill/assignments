import React from "react"
import styled from "styled-components"

const StyledFooter = styled.h1`
    display:flex;
    justify-content:center;
    font-family: ricknmorty;
    color:rgb(65, 135, 128);
    font-size:30px;
    margin:4%;
    color:orange;
    text-shadow: 2px 2px rgb(228, 56, 13);
`
export default function Footer(){
    return(
        <StyledFooter>
            <footer>
                <h3>CHARACTERS: 493</h3>
                <h3>LOCATIONS: 76</h3>
                <h3>EPISODES: 31</h3>
                  
            </footer>
        </StyledFooter>
    )
}