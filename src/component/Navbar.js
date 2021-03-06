import React from 'react'

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div  className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><h2 style={{color :"black"}}> BLOG WEBSITE</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item">
            {/* <Link className="nav-link" to="/moreinformation">BLOG</Link>    */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/author">AUTHOR</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}
