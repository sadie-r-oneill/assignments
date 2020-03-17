import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledNav = styled.nav`

    @media(max-width:400px){
        display:flex;
        justify-content:space-evenly;
        font-size:15px;
        text-shadow: 4px 4px  rgb(7, 244, 82);
        font-family:ricknmorty;
        
    }
    @media(max-width:600px){
        display: flex;
        justify-content: space-evenly;
        font-family:ricknmorty;
        height:15vh;
        font-size:20px;
        text-shadow: 6px 6px  rgb(7, 244, 82);
    }
   @media(min-width:600px){
        display: flex;
        justify-content: space-evenly;
        font-family:ricknmorty;
        height:15vh;
        font-size:20px;
        text-shadow: 6px 6px  rgb(7, 244, 82);
   }
    @media(min-width:1000px){
        display: flex;
        justify-content: space-evenly;
        align-items:center;
        height:15vh;
        font-family: ricknmorty;
        font-size:25px;
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