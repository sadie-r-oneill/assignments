import React, {useContext}from "react"
import {ThemeContext} from "./themeContext"

function Navbar(props){
    const {theme} = useContext(ThemeContext)
    return(
         <main className = {`${theme}-theme`}>
            <h2>HOME</h2>
            <h2>ABOUT</h2>
            <h2>CONTACT</h2>
            <h2>{}</h2>
         </main>
         
           
            
         
       
    )
}


export default Navbar