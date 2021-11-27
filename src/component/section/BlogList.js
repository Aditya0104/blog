import React, { useState, useEffect } from 'react'
import axios from "axios"

import BlogCard from "./BlogCard"

const BlogList = () => {
  const[posts ,setPosts] = useState([])
  
 
  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
      res=> {
      setPosts(res.data)
    }).catch(err => {
      console.log(err)
    });
  },[])

  return (
       
       <div>
         <div className="container mt-5">
           <div className="row">
            {/* <div className="col">  */}
            <div className="row gy-4">
      {
      posts.map(post => (
        <BlogCard
          id={ post.id }
          title={ post.title }
          description={ post.description }
          author={ post.author }
          
        />
      ))}
       </div>
       </div>
       </div>
       </div>
        // </div>
     
      
      
  )
}

export default BlogList
