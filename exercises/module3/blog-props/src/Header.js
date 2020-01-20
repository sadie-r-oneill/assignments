import React from 'react';
import Navbar from "./Navbar.js"

function Header() {
    return (
       <header>
           <Navbar />
           <h1 className = "navbar-2">Start Bootstrap</h1>
           <h1 className = "header-2">Clean Blog</h1>
                <span className = "heading">A Blog Theme by Start Bootstrap</span>

       </header>
    )
}

export default Header