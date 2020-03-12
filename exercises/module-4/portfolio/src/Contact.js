import React from "react"
//const Box = style.div `` -> syntax for styled-components

function Contact(props){
    return (
        <div className = "contact">
            <nav className = "nav">
                <a href = "">
                <img className = "resumeImg" src ="https://img.icons8.com/bubbles/2x/book.png"></img>
                </a>
                <a href = "https://github.com/sadie-r-oneill">
                <img className = "gitImg" src = "https://img.icons8.com/color/480/github--v1.png"></img>
                </a>
                <a href = "https://www.linkedin.com/in/sadie-oneill/">
                    <img className = "linkedIn" src = "https://www.freeiconspng.com/uploads/linkedin-logo-15.png"></img>
                </a>
            </nav>
              
            
            <h1 className = "myName">Sadie O'Neill</h1>
            
        </div>
    )

}

export default Contact