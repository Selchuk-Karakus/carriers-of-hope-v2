import React from "react";
import '../styles/forgottonNameorPasword.scss';
import { useNavigate } from "react-router-dom";

function ForgottenNameOrPassword() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <form>
        <label>Email:</label>
        <input type="email" />
        <button>submit</button>
      </form>
    </>
  );
}

export default ForgottenNameOrPassword;
