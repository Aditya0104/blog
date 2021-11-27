import React, { useState, useEffect } from 'react'
import axios from "axios"
import Weblayout from "../layout/Weblayout"
//import BlogCard from '../component/section/BlogCard'
import AuthorCard from '../component/AuthorCard'

const AuthorList = () => {
  const[comments ,setComments] = useState([])

  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(
      res=> {
      setComments(res.data)
    }).catch(err => {
      console.log(err)
    });
  },[])

  return (
    <Weblayout>
      <hr/> 
       <div>
       <div className="container">
           <div className="row">
            {/* <div className="col-md-12">  */}
            <div className="row gy-4">
      
         
      {
      comments.map(Comment => (
        <AuthorCard
          id={ Comment.id }
         
          name={Comment.name }
          
        />
      ))}
      </div>
      </div>
      </div>
      </div>
      {/* </div> */}
     
    </Weblayout> 
  )
}

export default AuthorList
