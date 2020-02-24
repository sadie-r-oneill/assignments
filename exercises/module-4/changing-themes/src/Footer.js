import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Footer(props){
    const {theme} = useContext(ThemeContext)
    return(
        <footer className = {`${theme}-theme`}>
            <h2>{theme === "light" ? "Light" : "Dark"}</h2>
        </footer>
    )
}        

   
export default Footer