import React from "react";
import { useNavigate } from "react-router-dom";

function RequestForm() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Request Form</div>
      <form>
        <input type="text" />
        <button onClick={() => navigate("/order-summary", { replace: true })}>
          submit
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
