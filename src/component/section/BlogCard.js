import React from 'react'

import { NavLink } from 'react-router-dom'
import Nature from "../../assets/images/nature.jpg"

export default function BlogCard({id, title, }) {
    
 


  return (
    
    <div className="card mx-2" style={{width: "18rem"}}>
      <img src={Nature} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{id}</p>
        <NavLink to={ "/singlePost/"+ id} className="btn btn-primary">More info</NavLink>
    </div>
    </div>
   

 
   

  )
}