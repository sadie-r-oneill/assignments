import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(){
        return (
        <ThemeContextConsumer>
            {(themeContext) => {
            const {isLightTheme, light,dark} = themeContext
            const theme = isLightTheme ? light : dark 
            return (
                <footer style = {{background: theme.bg, color: theme.color}}>Here is a Footer</footer>
            )
            }
            }

        </ThemeContextConsumer>
        )
}
   
export default Footer