import React from "react";
import Aim from './Aim';
import Contact from './Contact';
import Blog from './Blog';
import Experience from "./Experience";
// import Education from './Education';
// import Resume  from './Resume';

const Home = () => {

     return ( 
          <div className="home_tab">
          <Aim/>
           <Experience />
           {/* <Education /> */}
           {/* <Resume /> */}
           <Blog/>
           <Contact />
          </div>
      );
}
 
export default Home;