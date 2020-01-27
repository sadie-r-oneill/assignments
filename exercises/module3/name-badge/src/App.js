import React from 'react';
import BadgeMaker from "./BadgeMaker.js"
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
      favFood: "",
      aboutMe: "",
      badges: []
      
    }
   
  }
  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]:value})

  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      const {firstName, lastName, email, placeOfBirth, phone, favFood,aboutMe} = prevState

      const newBadge = {
        firstName, 
        lastName, 
        email, 
        placeOfBirth, 
        phone, 
        favFood,
        aboutMe
      } 
        return {
            badges: [...prevState.badges, newBadge],
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            aboutMe: "",
        }
    }
   )
  }
  render(){

    const badgeStyle = {
      display: "flexbox",
      height: "300px",
      width: "680px",
      border: "2px solid black",
      borderRadius: "1%",
      marginLeft: "auto",
      marginRight: "auto",
  }
  const inputStyle = {
      border: "2px solid black",
      borderRadius: "1%",
      width: "250px",
      marginLeft: "55px",
      marginTop:"20px"
  }
  const aboutStyle ={
      marginTop: "20px",
      width: "561px",
      height: "100px",
      marginLeft: "55px",
      border: "2px solid black",
      borderRadius: "1%"
  }
  const formStyle = {
      display: "flexbox",
      alignItems: "center",
      justifyContent: "space-between"
  }
  const buttonStyle = {
      marginLeft: "43%",
      marginTop: "10px",
      width: "100px",
      border: "2px solid black",
      borderRadius: "1%"
  }
    const mappedBadges = this.state.badges.map((badge, index) => {
      return(
        <BadgeMaker key = {index} {...badge} badgeStyle = {buttonStyle, formStyle, aboutStyle, inputStyle, badgeStyle}/>
      )
    })
    
    return(
      <div style = {badgeStyle}>
        <form onSubmit = {this.handleSubmit} style = {formStyle}>

          <input 
          value = {this.state.firstName}
          onChange = {this.handleChange}
          minLength = "3" 
          name = "firstName"
          style = {inputStyle}
          placeholder = "First Name">

          </input>
          
          <input 
          value = {this.state.lastName}
          onChange = {this.handleChange}
          minLength = "3"
          name = "lastName"
          style = {inputStyle}
          placeholder = "Last Name">

          </input>
          <input 
          value = {this.state.email}
          onChange = {this.handleChange}
          minLength = "3" 
          name = "email"
          style = {inputStyle}
          placeholder = "Email">

          </input>
          <input 
          value = {this.state.placeOfBirth}
          onChange = {this.handleChange}
          minLength = "3"
          name = "placeOfBirth"
          style = {inputStyle}
          placeholder = "Place of birth">

          </input>
          <input 
          value = {this.state.phone}
          onChange = {this.handleChange}
          type = "tel"
          name = "phone"
          minLength = "9"
          style = {inputStyle}
          placeholder = "Phone number">

           </input>
          <input
          value = {this.state.favFood}
          onChange = {this.handleChange}
          minLength = "3"
          style = {inputStyle}
          name = "favFood"
          placeholder = "Favorite food"
          ></input>

          <textarea 
          value = {this.state.aboutMe}
          onChange = {this.handleChange}
          minLength = "3"
          style = {aboutStyle} 
          placeholder = "Tell us about yourself" />
          <br />

          <button style = {buttonStyle}>Submit</button>
        </form>
        {mappedBadges}
      </div>
    )
  }
    
}

export default App;
