import React from 'react'
import logo from '../images/sh_logo.png'

const  Footer=()=> {
  return (
   <div className="mainfooter">
    <div className='footer'>
    <div className="aboutus">
       <h4>About Us</h4>
    <p className="address">SER Center, Prasadampadu, Vijayawada, <br />India - 521108</p>
    <a href="tel:+919685511620"><p className="call">+91  9685511620</p></a>
   <a href="mailto:hello@schoolhues.com"> <p className="mail">hello@schoolhues.com</p></a>
   <div className="foot-icons">
   <i class="fa-brands fa-linkedin"></i>
   <i class="fa-brands fa-twitter"></i>
   <i class="fa-brands fa-instagram"></i>
   <i class="fa-brands fa-facebook"></i>
   </div>
    </div>
    <div className="company">
   <h4>Company</h4>
   <p className="company-det">About Us</p>
   <p className="company-det">Blogs</p>
   <p className="company-det">Contact</p>
    </div>
    <div className="services">
    <h4>Services</h4>
    <p className="company-det">Jobs</p>
   <p className="company-det">Schools</p>
   <p className="company-det">Candidates</p>
    </div>
    <div className="foot-logo">
       <img  className="footer-logo"src={logo} alt="" />
    </div>
    </div>
    <div className="copy">
        <hr />
        <p className="copyright">@2023 SchoolHues. All Rights Reserved</p>
        
    </div>
    </div>
  )
}
export default Footer