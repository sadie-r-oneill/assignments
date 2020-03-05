import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CharacterDisplay from './CharacterDisplay'


export default function App(){
  return(
    <div>
      <CharacterDisplay />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}


