import React from "react"

function BlogProp(props){
    return (
        <div className = "container">
            <h2 className = "title">{props.title}</h2>
            <h2 className = "subtitle">{props.subTitle}</h2>
            <h2 className = "author">Posted by {props.author} on {props.date}</h2>
            
        </div>
        
    )
}

export default BlogProp