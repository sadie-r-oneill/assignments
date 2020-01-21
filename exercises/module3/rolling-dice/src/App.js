import React from "react"
import Dicebox from "./Dicebox"
import "./styles.css"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

    handleClick = () =>  {
        this.setState({
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            num3: Math.floor(Math.random() * 6),
            num4: Math.floor(Math.random() * 6),
            num5: Math.floor(Math.random() * 6)
        })
    }

    render(){
        const diceDisplay = {
            display:"grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)"
        }
        const button = {
            gridColumn: "2 / 5",
            gridRow: "3 / 4",
            border: "3px solid black",
            borderRadius: "80%"

        }
        return(
            <div style ={diceDisplay}>
                <Dicebox gridColumn = {"1 / 2"} gridRow = {"1 / 3"} num ={this.state.num1}/>
                <Dicebox gridColumn = {"2 / 3"} gridRow = {"1 / 3"} num ={this.state.num2}/>
                <Dicebox gridColumn = {"3 / 4"} gridRow = {"1 / 3"} num ={this.state.num3}/>
                <Dicebox gridColumn = {"4 / 5"} gridRow = {"1 / 3"} num ={this.state.num4}/>
                <Dicebox gridColumn = {"5 / 6"} gridRow = {"1 / 3"} num ={this.state.num5}/>
                <button style = {button} onClick = {this.handleClick}>Roll the Dice!</button>
            </div>
        )
    }
    
}    

export default App