import React from "react";
import { Form } from "../styles/Container.styled";
import { useNavigate } from "react-router-dom";

function ForgottenNameOrPassword() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <Form>
        <label>Email:</label>
        <input type="email" />
        <button>submit</button>
      </Form>
    </>
  );
}

export default ForgottenNameOrPassword;
