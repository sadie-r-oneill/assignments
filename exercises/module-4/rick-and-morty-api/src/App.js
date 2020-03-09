import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CharacterList from './CharacterList'
import {Switch, Route} from "react-router-dom"


export default function App(){
  return(
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path ="/" component = {Main}/>
        <Route path = "/Characterlist" component = {CharacterList}/>
        <Route path />
      </Switch>
      <Footer />
    </div>
)
}


         
       
           
      


