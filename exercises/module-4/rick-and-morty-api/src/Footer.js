import React from "react"
import styled from "styled-components"

const StyledFooter = styled.h1`

    @media(max-width:400px){
        display:flex;
        jusyify-content:center;
        align-items:center;
        font-size:20px;
        height:10vh;
        margin-top:3%;
        margin-bottom:1%;

    }
    @media(max-width:600px){
        display:flex;
        justify-content:center;
        font-family: ricknmorty;
        font-size:20px;
        height:10vh;
        margin-top:3%;
        color:orange;
        text-shadow: 1px 1px rgb(228, 56, 13);
        margin-bottom:1%;
    }
    @media(min-width:600px){
        display:flex;
        justify-content:center;
        font-family: ricknmorty;
        font-size:25px;
        height:10vh;
        color:orange;
        margin-top:3%;
        margin-bottom:2%;
        text-shadow: 2px 2px rgb(228, 56, 13);
    }
    @media(min-width:1000px){
        display:flex;
        justify-content:center;
        font-family: ricknmorty;
        font-size:30px;
        height:10vh;
        margin-top:3%;
        color:orange;
        margin-bottom:2%;
        text-shadow: 2px 2px rgb(228, 56, 13);
    }
`
export default function Footer(){
    return(
        <StyledFooter>
            <footer>
                <h3>CHARACTERS: 493</h3>
                <h3>EPISODES: 31</h3>
                  
            </footer>
        </StyledFooter>
    )
}