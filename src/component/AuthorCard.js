import React from 'react'
//import {NavLink } from 'react-router-dom'
import AuthorImg from "../assets/images/Author.jpg"


export default function Author({id, name}) {
  return (
  
    
    
     
      <div className="card mx-2" style={{width: "18rem"}}>
      <img src={AuthorImg} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{id}</h5>
        <p className="card-text">{name}</p>
        {/* <NavLink to={ "/singlePost/"+id} className="btn btn-primary">More info</NavLink> */}
    </div>
</div>
 
  )
}
