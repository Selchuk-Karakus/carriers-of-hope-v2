import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage.scss';


function Homepage() {
  return (
    <div className="home">
      <h1>Welcome</h1>
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
        hendrerit. Ut non massa eget lacus suscipit scelerisque. Duis luctus
        massa eget lorem scelerisque dapibus. Vivamus aliquet, augue sit amet
        vehicula accumsan, lectus erat lobortis magna, vel tincidunt odio turpis
        vel tellus. Sed sit amet porta urna. Nunc et enim nunc. Suspendisse quis
        lorem bibendum, semper mauris quis, dapibus neque. Phasellus semper
        mattis nisl vel commodo. Praesent eu placerat nisi, eu congue nisl. Nam
        laoreet blandit tellus.
      </p>
      <Link to="/products">Online Shop</Link>
    
    </div>
  );
}

export default Homepage;