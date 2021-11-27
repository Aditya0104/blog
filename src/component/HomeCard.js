import React from 'react'
import Wildlife from"../assets/images/wildlife1.jpeg"
import BlogList from './section/BlogList'
import Sidebar from './Sidebar'
export default function HomeCard() {
  return (
    
    
    <div>
      {/* <div className="Center1"> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container">
      <img src={Wildlife} className="d-block w-100" alt="..."/>
      <div className="text-block">
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
    </div>
   </div>
  </div>
</div>
<Sidebar/>
    <BlogList/> 
    
    </div>
    // </div>
    
  )
}
