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
    }).then((res) => {
      if(res.signedIn && res.isAdmin) {
        console.log(res)
        navigate('/admin/dashboard')
      } 
      else if (res.signedIn) {
        console.log(res)
        setDisplayError(false);
        navigate("/products");
      } else {
        setDisplayError(true);
      }
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-with-message">
          <div className="login">Login</div>
          <p className="login-message">
            Welcome back, please login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <nav className="nav-links">
            {/* <p className="remember-me-message">
              <Link to="/forgotten-name-or-password">
                <span style={{ color: "black" }}>Remember me</span>
              </Link>
            </p> */}
            <p className="forgotten-password">
              <Link to="/forgotten-name-or-password">
                <span style={{ color: "black" }}>Forgotten password ?</span>
              </Link>
            </p>
          </nav>

          <div className="button-container">
            <button className="sign-up-btn">Sign up</button>
            <button className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;