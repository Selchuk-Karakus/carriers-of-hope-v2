import React from "react";
import { useNavigate } from "react-router-dom";

function ItemDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p>item name</p>
        <p>item description</p>
        <img alt="" />

        <button onClick={() => navigate("/request-form")}>place request</button>
      </div>
    </>
  );
}

export default ItemDetails;
