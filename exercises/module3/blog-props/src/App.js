import React from 'react';
import Header from './Header.js'
import BlogList from './BlogList.js'
import Footer from './Footer.js'


function App() {
  return (
    <div>
      <Header className = "header"/>
      <BlogList className = "bloglist"/>
      <Footer className = "footer"/>
    </div>
  )
}

export default App
