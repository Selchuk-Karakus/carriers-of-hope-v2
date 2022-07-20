import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import '../styles/userlogin.scss';

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayError, setDisplayError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      email,
      password,
    }).then((signedIn) => {
      if (signedIn) {
        setDisplayError(false);
        navigate("/products");
      } else {
        setDisplayError(true);
      }
    });
  };

  return (
    <>
      {" "}
      <button onClick={() => navigate(-1)}>back</button>
      <div>
        <div>UserLogin</div>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        <nav>
          <p>
            Forgotten password? Click{" "}
            <Link to="/forgotten-name-or-password">
              <span style={{ color: "blue" }}>here</span>
            </Link>
          </p>
          <p>
            Don't have an account? Sign up{" "}
            <Link to="/register">
              <span style={{ color: "blue" }}>here</span>
            </Link>
          </p>
        </nav>
        <div className="mb-3" style={displayError ? {} : { display: "none" }}>
          <label>Incorrect Email or Password</label>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
