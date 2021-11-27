import React   from 'react'
import axios from 'axios';
import { useEffect, useState  } from 'react';
import BlogCard from '../component/section/BlogCard';


export default function SinglePost(props) {
 const[post , setPost] = useState({})
  const[id,setId] = useState(5)
  
 
  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      res=> {
setPost(res.data)
    }).catch(err => {
      console.log(err)
    });
  },[id])

 
 
   return (
   
<div>



  <input type ="text" value = {id} onchange= {e => setId(e.target.value)} />
  <div>{post.body}</div>

       </div>    
     
   
  )
}
