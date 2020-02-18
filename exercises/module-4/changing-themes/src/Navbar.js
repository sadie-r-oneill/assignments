import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Navbar(){
    return(
         <ThemeContextConsumer>
            {(themeContext) => {
            const {isLightTheme, light,dark} = themeContext
            const theme = isLightTheme ? light : dark 
            return(
                <main style ={{background: theme.bg, color: theme.color}}>
                    <h2>HOME</h2>
                    <h2>ABOUT</h2>
                    <h2>CONTACT</h2>
                    <h2>Click this button to change themes!</h2>
                </main>
            )}
            }
         
        </ThemeContextConsumer>
    )
}


export default Navbar