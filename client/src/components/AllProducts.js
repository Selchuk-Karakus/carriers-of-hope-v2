import React from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  return (
    <>
      <div>
        <p>All Products</p>
        <Link to="/product-details">
          {" "}
          <div>
            <p>Item 1</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AllProducts;
