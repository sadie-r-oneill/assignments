import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    font-family: ricknmorty;
    font-size: 40px;
    margin:4%;
   
`
export default function Navbar(){

    
    return(
        <nav>
            <StyledNav>
                <a href = "">HOME</a>
                <a href = "">CHARACTERS</a>
                <a href = "">EPISODES</a>
            </StyledNav>   
               
        </nav>
    )
}