import React from 'react';
import {UserContextConsumer} from './userContext'

class App extends React.Component{
  state = {
    imgField: "",
    titleField: "",
    description:""

  }
  handlechange = () => {
    const {imgField, titleField, description} = uglyThings
    this.setState({[uglyThings]:value})
  }
}

export default App
