import React from 'react'
import Wildlife from "../assets/images/wildlife1.jpeg"
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
export default function Sidebar() {

  return (
    <div>
      <div className="sidebar">
        
     
        <div class="card">
  <div class="card-body">
  <h1> About Us   </h1> 
  <hr/>
 <p> Lorem ipsum dolor sit amet,<br/>
  laboris nisi ut aliquip ex ea<br/>
   commodo consequat.<br/>
  Duis aute irure dolor in <br/>
 </p>
 <h2> Categories  </h2> 
 
 <hr/>
  <ul>
    <li> Wildlife </li>
    <li> Games </li>
    <li> Movies </li>
    <li> Music </li>
    </ul>
    <h2> Contact Us  </h2> 
    <hr/>
    <span style={{marginLeft:"05px"}}><PhoneIcon/> </span>
    <span style={{marginLeft:"15px"}}> <FacebookIcon/> </span>
    <span style={{marginLeft:"15px"}}><InstagramIcon/></span>
    <span style={{marginLeft:"20px"}}><MailIcon/> </span>
  </div>
 </div>   
 </div>
 </div>
 
  )
}
