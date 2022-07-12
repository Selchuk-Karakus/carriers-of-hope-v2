import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div>Homepage</div>
      <Link to="all-items">All Items</Link>
    </div>
  );
}

export default Homepage;
