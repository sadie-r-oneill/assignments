import React, {createContext, Component} from "react"
export const {Provider, Consumer} = createContext()

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {bg: "#333333", color: "whitesmoke"},
        dark: {bg: "whitesmoke",color: "#333333"}
    }
    toggleTheme = () => {
       this.setState ({isLightTheme:!this.state.isLightTheme})
            

    }
    render(){
        return(
            <Provider value = {{...this.state, toggleTheme : this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}


