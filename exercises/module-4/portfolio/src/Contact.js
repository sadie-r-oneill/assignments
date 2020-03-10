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
            <div className = "container">
                <img className = "gmailImg "src = "https://d33wubrfki0l68.cloudfront.net/1e231b2d0cc97b98c8a52178ff4afd3aa669df09/8507d/static/40690a87f10d95e2716a0fc4811c105e/8114e/fee48c700654da0653ad489b142b2b1fd5121391_flow-gmail.png"></img>
                <img className = "phoneImg" src = "https://i.pinimg.com/originals/00/f3/6a/00f36ab73cd503fc35f9286fb04f1269.png"></img>
                <img className = "folderImg" src ="https://img.icons8.com/bubbles/2x/browse-folder.png"></img>
            </div>
        </div>
    )

}

export default Contact