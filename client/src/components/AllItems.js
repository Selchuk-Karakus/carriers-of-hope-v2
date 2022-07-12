import React from "react";
import { Link } from "react-router-dom";

function AllItems() {
  return (
    <>
      <div>
        <p>All Items</p>
        <Link to="/item-details">
          {" "}
          <div>
            <p>Item 1</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AllItems;
