import React from "react"
import styled from "styled-components"

const Photo = styled.div`
    display:flex;
    justify-content:center;
    background-image:url("https://static.highsnobiety.com/thumbor/m_RQFJgji5fGd8Ub2bTRiJntWUk=/fit-in/800x480/smart/static.highsnobiety.com/wp-content/uploads/2019/05/15182639/rick-morty-season-4-release-date-feature.jpg");
    height:480px;
    width: 800px;
    margin-left:20%;

`
export default function Main(){
    return(

        <Photo></Photo>
    )
}