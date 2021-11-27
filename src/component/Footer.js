import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
  return (
   
     
      <div className = "footer">
        
       
          <div>
           <h3> About MBD  </h3>
           <hr/>
           <li>Management</li>
           <li>Contact</li>
           <li>News & Media</li>
           <li>Careers</li>
           <li>MBD Journey</li>
           </div>
           <div style={{marginLeft:"80px"}}>
           <h3>Help</h3>
           <hr/>
            <li>About Us</li>
           <li> Privacy Policy </li>
            <li> Site Map</li>
            </div>
            <div  style={{marginLeft:"80px"}}>
             <h3>Other MBD Websites</h3>
             <hr/>
            <li>www.mbddisha.com/</li>
            <li>www.mbdalchemie.com</li>
            <li>www.radissonblu.com/en/hotel-noida</li>
            <li>www.radissonblu.com/en/hotel-ludhiana</li>
            <li>www.mbdneopolis.com</li>
            <li>www.mbdbooks.in</li>
            <li>www.mbdsteigenberger.in</li>
            </div>
            <div style={{marginLeft:"80px"}}>
            <h3> Branches </h3>
            <hr/>
            <li> MBD Global</li>
             <li>MBD South Africa</li>
            <li> MBD Sri Lanka</li>
            </div>
            <div style={{marginLeft:"80px"}}>
            <h3> Social Media </h3>
            <hr/>
            <li> <PhoneIcon/> - 36647748266</li>
             <li>< FacebookIcon/>  mbdinf0123@gmail.com</li>
            <li><InstagramIcon/>    _mbd123</li>
            <li><MailIcon/>   mbdquery@gmail.com</li>
            </div>
    </div>
     
     
  )
}