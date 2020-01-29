import React from 'react'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    people: data
                })
                console.log(data)
            })
    }
    render(){
        const background ={
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
        }
        const pictureStyle ={
            display: "flex",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto"
        }
        const nameStyle ={
            display: "flex",
            justifyContent: "center",
            color: "red"
        }
        return(
            <div style ={background}>
                
                {this.state.people.map(person => (
                    <div>
                        <img style = {pictureStyle} src= {person.image} />
                        <h1 style = {nameStyle} >{person.name}</h1>
                    </div>
                ))}
            </div>
        )
    }
}
export default App
