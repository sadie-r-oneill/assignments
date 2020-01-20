import React from "react"
import BlogProp from "./BlogProp"
import BlogPost from "./BlogPost"

function BlogList(){
    const newBlog = BlogPost.map(item => 
    <BlogProp 
        title = {item.title}
        subTitle = {item.subTitle}
        author = {item.author}
        date = {item.date}

   />
    )
   return ([newBlog])
}
export default BlogList