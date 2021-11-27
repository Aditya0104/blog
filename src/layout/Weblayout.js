import React from 'react'
import Navbar from '../component/Navbar'
import Footer from  "../component/Footer"

const Weblayout = ({children}) => {
 return (
   <div>
 <Navbar/>
  <div>
   
    <main>
      {children}
    </main>
    
  </div>
  <Footer/>
  </div>
 )
}
export default Weblayout