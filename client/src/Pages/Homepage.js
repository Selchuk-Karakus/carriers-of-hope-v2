import React from "react";
import { Link } from "react-router-dom";
import '../components/AboutUs';
import AboutUs from "../components/AboutUs";

function Homepage() {
  return (
    <div className="container">
      <div className="home">
       <div className="homeImg"><img alt="coventry" src='/images/coventry.jpg' /></div>
        <div className="content-text">
            <h1>Carriers of Hope Coventry CIO</h1>
            <p>
              Supporting Refugees, Asylum Seekers and other Migrants in Coventry since 2009
              Charitable Incorporated
            </p>
            <div className="online-shop"><Link to="/products">Online Shop</Link></div>
        </div>
      </div>
      <AboutUs/>
      </div>
      
  );
}

export default Homepage;