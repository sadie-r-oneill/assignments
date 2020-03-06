import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

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
                <Link to= "/">HOME</Link>
                <Link to= "/Characterlist">CHARACTERS</Link>
                <Link to= "/Episodes">EPISODES</Link>
            </StyledNav>   
               
        </nav>
    )
}