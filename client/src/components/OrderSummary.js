import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>OrderSummary</div>
      <button onClick={() => navigate(-1)}>back</button>
    </>
  );
}

export default OrderSummary;
