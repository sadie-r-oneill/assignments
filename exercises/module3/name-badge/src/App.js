import React from 'react';
//import "./styles"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favFood: ""
    
    }
    //this.handleChange = this.handleChange.bind(this)
  }
  render(){
    const badgeStyle = {
      display: "flex",
      height: "500px",
      width: "600px",
      border: "black solid 5px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "2%"

    }
    const buttonStyle = {
      border: "black 2px solid",
      marginLeft: "45%",
      marginTop: "10%"

    }
    const formStyle = {
      width: "600px"
      

    }
    const inputStyle = {
      width: "250px",
      justifyContent: "space evenly",
      marginLeft: "5%",
      marginTop: "5%",
      border: "black 2px solid"
      
    }
    const textareaStyle = {
      width:"500px",
      height:"100px",
      marginTop: "10%",
      marginLeft: "8%",
      border: "black solid 2px",
      borderRadius: "2%"
    }
    
    return(
      <div style = {badgeStyle}>
        <form style = {formStyle}>
          <input style = {inputStyle}placeholder = "First Name"></input>
          <input style = {inputStyle}placeholder = "Last Name"></input>
          <input style = {inputStyle}placeholder = "Email"></input>
          <input style = {inputStyle}placeholder = "Place of birth"></input>
          <input style = {inputStyle}placeholder = "Phone number"></input>
          <input style = {inputStyle}placeholder = "Favorite food"></input>
          <textarea style = {textareaStyle} placeholder = "Tell us about yourself" />
          <br />
          <button style = {buttonStyle}>Submit</button>
        </form>
      </div>
    )
  }
    
}

export default App;
