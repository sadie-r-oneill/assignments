import React, {createContext, useState} from "react"
const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme,setTheme] = useState("dark")
    
function toggleTheme(){
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

}
    return(
        <ThemeContext.Provider value = {{theme,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
        
}

export {ThemeContextProvider, ThemeContext}


