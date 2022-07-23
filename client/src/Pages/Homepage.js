import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage.scss';


function Homepage() {
  return (
    <div className="home">
      <h1>Carriers of Hope Coventry</h1>
      <img alt="coventry" src='/images/coventry.jpg' />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        condimentum urna risus, eget volutpat eros bibendum quis. Cras tempus
        diam ex, eu rutrum sapien tempor vitae. Cras egestas nibh non leo
        viverra, vitae blandit sapien scelerisque. In non tortor a augue tempus
        tempus id sit amet libero. Aenean nec lacus ut nunc pretium dignissim a
        a ante. Nam efficitur a sapien vel egestas. Vestibulum ac augue at dui
        egestas molestie in vel felis. Aenean pretium diam ac eros aliquam
        vehicula vitae eu lectus. Phasellus et tortor non lectus fringilla
        hendrerit.
      </p>
      <Link to="/products">Online Shop</Link>
    
    </div>
  );
}

export default Homepage;