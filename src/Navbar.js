
import React from "react";
import loxa from '../src/Asset/images/loxa.png';
import { Link } from "react-router-dom";
const Navbar = () => {
     return ( 
          <div className="navbar">   
            <div className='my-log'>
            <img src={loxa}  className='nav-img' alt='navbr'/>
           </div>
                     
          <div className="links">
               <li>
                <Link to="/"></Link>
               </li>

               <li>
                    <Link to="/AIM">AIM</Link>
               </li>

               <li>
                    <Link to='/MYEXPERIENCE'>EXPERIENCE</Link>
               </li>
                 <li>
                    <Link to='/EDUCATION'>EDUCATION</Link>
                 </li>
               <li>
                    <Link  TO='/RESUME'>RESUME</Link>
                    </li>
               <li>
                    <Link to='/PORTFOLIO'>PORTFOLIO</Link>
               </li>
                 <li>
                    <Link  to='/BLOG'>BLOG</Link>
                 </li>
                 <li>
                    <Link to='/CONTACT'>CONTACT</Link>
                 </li>
           </div>
        
          </div>
      );
}
 
export default Navbar;