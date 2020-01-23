import React from 'react';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            namesList:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleClick = (e) => {
        e.preventDefault()
       const fullName = this.state.firstName + " " + this.state.lastName
       this.setState(prevState => ({
           namesList: [...prevState.namesList, fullName],
           firstName: "",
           lastName : ""
       }))
    }
       eraseStuff = (e) => {
           this.setState({
               namesList:[]
           })
       }
    
    
    render(){
        return(
        <div>  
            <form onSubmit = {this.handleClick}>
                <input 
                    type = "text"
                    value = {this.state.firstName}
                    placeholder = "First Name"
                    name = "firstName"
                    onChange = {this.handleChange}
                />
                <input 
                    type = "text"
                    value = {this.state.lastName}
                    placeholder = "Last Name"
                    name = "lastName"
                    onChange = {this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <button>Click</button>
                
            </form>
        {this.state.namesList.map(name => <h1>{name}</h1>)}
        <button onClick = {this.eraseStuff}>Erase the List</button>
        </div>  
        )
    }
}
export default App