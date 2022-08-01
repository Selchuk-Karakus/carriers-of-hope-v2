import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.scss";
import { signUp } from "../services/authService";
import { login } from "../services/authService";

const SignUpPage = () => {
  // States for registration for holding form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    city: "",
    postcode: "",
    country: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const {
    first_name,
    last_name,
    address,
    email,
    city,
    postcode,
    country,
    telephone,
    password,
    confirmPassword,
  } = formData;

  //
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e);
  };

  // States for checking the errors for the functionality of the form
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      address === "" ||
      email === "" ||
      city === "" ||
      postcode === "" ||
      country === "" ||
      telephone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
    } else {
      setSubmitted(true);
      setError(false);
    }

    // if the validation above passes register the user then log them in diverting the user to a different UI depending on user credentials
    signUp({
      first_name,
      last_name,
      address,
      email,
      city,
      postcode,
      country,
      telephone,
      password,
      confirmPassword,
    }).then((res) => {
      console.log(res.statusText);
      if (res.status === 201) {
        login({
          email,
          password,
        }).then((res) => {
          if (res.signedIn && res.isAdmin) {
            console.log(res);
            navigate("/admin/dashboard");
          } else if (res.signedIn) {
            console.log(res.statusText);
            navigate("/products");
          } else {
            setError(true);
          }
        });
      }
    });
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {`${first_name} ${last_name}`} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  // Showing error message if passwordconfirm error is true
  const errorMessageConfirmPassword = () => {
    return (
      <div
        style={{
          display: errorConfirmPassword ? "" : "none",
        }}
      >
        <h1>Please enter matching password for both the fields</h1>
      </div>
    );
  };

  const navigate = useNavigate();

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        {" "}
        {"< "}back
      </button>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
        {errorMessageConfirmPassword()}
      </div>
      <div className="signUp-container">
        <h1 className="signUp-header">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            onChange={onChange}
          />
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            onChange={onChange}
          />
          <label>Address Line 1</label>
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={onChange}
          />
          <label>Town/City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            onChange={onChange}
          />
          <label>Postcode</label>
          <input
            className="form-control"
            type="text"
            name="postcode"
            onChange={onChange}
          />
          <label>Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            onChange={onChange}
          />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            name="email"
            onChange={onChange}
          />
          <label>Phone Number</label>
          <input
            className="form-control"
            type="tel"
            name="telephone"
            onChange={onChange}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            name="password"
            onChange={onChange}
          />
          <label>Retype Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            name="confirmPassword"
            onChange={onChange}
          />
          <button className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
