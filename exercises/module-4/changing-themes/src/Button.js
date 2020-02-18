import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

class Button extends Component {

    render(){
        return (
        <ThemeContextConsumer>
            {
                ({isLightTheme, light, dark, toggleTheme}) => 
                    <button onClick = {toggleTheme} 
                    style = {{background: isLightTheme ? light.bg : dark.bg, 
                    color: isLightTheme ? light.color : dark.color}}>Switch Theme!</button>
            }
        </ThemeContextConsumer>
        )
    }
        
}

export default Button