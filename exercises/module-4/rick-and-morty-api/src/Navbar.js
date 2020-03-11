import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    height:15vh;
    font-family: ricknmorty;
    font-size:25px;

    @media(max-width:400px){
        font-size:15px;
        text-shadow: 4px 4px  rgb(7, 244, 82);
        
    }
   
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