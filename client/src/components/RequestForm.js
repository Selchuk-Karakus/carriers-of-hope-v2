import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledRequestForm } from "./styles/Container.styled";

function RequestForm() {
  const navigate = useNavigate();
  return (
    <StyledRequestForm>
      <div>Request Form</div>
      <form>
        <input type="text" />
        <button onClick={() => navigate("/order-summary", { replace: true })}>
          submit
        </button>
      </form>
    </StyledRequestForm>
  );
}

export default RequestForm;
