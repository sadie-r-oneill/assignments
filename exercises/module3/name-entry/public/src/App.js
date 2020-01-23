import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){

    }
    render(){
        <form>
            <h1></h1>
            <button>CLICK</button>
        </form>
    }
}
export default App