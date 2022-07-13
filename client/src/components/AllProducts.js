import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <div>
        <p>All Products</p>
        <input type="search" placeholder="search products" />
        <Link to="/filtered-products">
          <div>
            <p>Filter</p>
          </div>
        </Link>
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
