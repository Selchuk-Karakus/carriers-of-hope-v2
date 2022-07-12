import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div>Homepage</div>
      <Link to="all-products">All Products</Link>
    </div>
  );
}

export default Homepage;
