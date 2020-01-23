// import './App.css';
import Square from './Square';
import React from "react"
import "./styles.css"
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color: ["white", "white", "white", "white"]
        }
    }
    
    changeSquareColors(){
        if(this.state.color[0]=== "white"){
            this.setState({
                color: ["purple","purple","purple","purple"]
            })
        }else{
            this.setState({
                color: ["white","white","white","white"]
            })
        }
    }
    changeTopSquares(){
        if(this.state.color[0]=== "white"){
            this.setState({
                color: ["green", "green", this.state.color[2],
            this.state.color[3]]
            })
        }else{
            this.state({
                color:["white","white",this.state.color[2],
            this.setState.color[3]]
            }
            )}
    }
    changeBottomLeft(){
        if(this.state.color[2] === "white"){
            this.setState({
                color:[this.state.color[0],this.state.color[1], "turquoise",
            this.state.color[3]]
            })
        }else{
            this.setState({
                color:[this.state.color[0],this.state.color[1], "white",
            this.state.color[3]]
            })
        }
    }
    changeBottomRightColors(){ 
        if(this.state.color[3] === "white"){
          this.setState({ 
              color: [this.state.color[0], this.state.color[1], this.state.color[2], "black"]
          })
          } else { 
            this.setState({ 
              color: [this.state.color[0], this.state.color[1], this.state.color[2], "white"]
          }
            )}
        }
        render(){
            const grid = {
                display:"grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gridTemplateRow: "repeat(4,1fr)",
            }
            const button1 = {
                gridColumn: "1 / 2",
                gridRow: "3 / 4",
            }
            const button2 = {
                gridColumn: "2 / 3",
                gridRow: "3 / 4",
            }
            const button3 = {
                gridColumn: "1 / 2",
                gridRow: "4 / 5",
            }
            const button4 = {
                gridColumn: "2 / 3",
                gridRow: "4 / 5",
            }
            return(
                <div style = {grid}>
                    <Square color={this.state.color[0]} gridColumn = { "1 / 2"} gridRow = {"1/ 2"} />
                    <Square color={this.state.color[1]} gridColumn = { "2 / 3"} gridRow = {"1/ 2"} />
                    <Square color={this.state.color[2]} gridColumn = { "1 / 2"} gridRow = {"2/ 3"}/>
                    <Square color={this.state.color[3]} gridColumn = { "2 / 3"} gridRow = {"2/ 3"}/>
                    <button class = "button1" style = {button1} onClick = {this.changeSquareColors.bind(this)}>I'm a button</button>
                    <button class = "button2" style = {button2} onClick = {this.changeTopSquares.bind(this)}>I'm also a button</button>
                    <button class = "button3" style = {button3} onClick = {this.changeBottomLeft.bind(this)}>Rook at me, I'm a button!</button>
                    <button class = "button4" style = {button4} onClick = {this.changeBottomRightColors.bind(this)}>Take a rook at me now</button>
            
                </div>
            )
        }
    
}

export default App
