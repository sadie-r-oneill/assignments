import React from 'react';
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Footer from "./Footer"

function App(){
  return(
  <div>
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/Services">Services</Link>
    </nav>
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
      <Route path = "/about">
        <About />
      </Route>
      <Route path = "/services">
        <Services />
      </Route>
    </Switch>
    <Footer />
  </div>
)  
}
  

export default App;
