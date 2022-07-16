import { useState } from "react";
import { login } from "../services/authService";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayError, setDisplayError] = useState();
  const navigate = useNavigate();

    
  const handleSubmit =  (e) => {
    e.preventDefault();
   
    login({
      email,
      password,
    }).then((signedIn) => {
      if(signedIn) {
        setDisplayError(false);
        navigate("/products");
      } else {
        setDisplayError(true);
      }
      
    })
  };

    return (
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="xxxxxxxx"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forgotten password?</a>
        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="button" className="btn btn-secondary">
            Sign up
          </button>
        </div>
        <div className="mb-3" style={displayError ? {} : { display: "none" }}>
          <label>Incorrect Email or Password</label>
        </div>
      </form>
    );
}


LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default LoginPage;