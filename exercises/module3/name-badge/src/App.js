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
    const aboutStyle = {
      width:"500px",
      height:"100px",
      marginTop: "10%",
      marginLeft: "8%",
      border: "black solid 2px",
      borderRadius: "2%"
    }
    const mappedBadges = this.state.badges.map((badge, index) => {
      return(
        <BadgeMaker key = {index} {...badge} badgeStyle = {buttonStyle, formStyle, aboutStyle, inputStyle, badgeStyle}/>
      )
    })
    
    return(
      <div style = {badgeStyle}>
        <form onChange = {this.handleSubmit} style = {formStyle}>

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
          type = "number"
          name = "number"
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
          style = {textareaStyle} 
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
