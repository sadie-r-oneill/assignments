import React from "react"
//const Box = style.div `` -> syntax for styled-components

function Contact(props){
    return (
        <div className = "contact">
            <nav className = "nav">
                <a href = "">Resume</a>
                <a href = "https://github.com/sadie-r-oneill">GitHub</a>
                <a href = "https://www.linkedin.com/in/sadie-oneill/">LinkedIn</a>
            </nav>
            <h1 className = "myName">Sadie O'Neill</h1>

            
        </div>
    )

}

export default Contact