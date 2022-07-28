import React from "react";
import { FaAngleRight } from 'react-icons/fa';

function AboutUs() {
  return (
  <div className="about-us">
   <div className="image-container">
      <img src="./images/aboutUs.jpg" alt="about-us image"/>
   </div>
   <div className="text-content">
      <h3>About Us</h3>
      <p>Our Mission is to provide a warm welcome, practical support and care, to Asylum Seekers, Refugees and Migrant families in need
      To befriend and empower individuals to be active citizens.
      </p>
      <a href="https://carriersofhope.org.uk/about-us/"><span>Learn More</span>
         {/* <span className="icon"><FaAngleRight/></span>  */}
      </a>
   </div>
  </div>
  );
}

export default AboutUs;
