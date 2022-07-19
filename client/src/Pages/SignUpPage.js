import React, { useState } from "react";
import { Form } from "../styles/Container.styled";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/authService";

const SignUpPage = () => {
  // States for registration for holding form data
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      <button onClick={() => navigate(-1)}>back</button>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
        {errorMessageConfirmPassword()}
      </div>
      <div>
        <h1>Create an account</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          className="form-control"
          type="text"
          name="first_name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          className="form-control"
          type="text"
          name="last_name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Address Line 1</label>
        <input
          className="form-control"
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Town/City</label>
        <input
          className="form-control"
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Postcode</label>
        <input
          className="form-control"
          type="text"
          name="postcode"
          onChange={(e) => setPostcode(e.target.value)}
        />
        <label>Country</label>
        <input
          className="form-control"
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="email@example.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          className="form-control"
          type="tel"
          name="phone"
          //           pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$
          // "
          onChange={(e) => setTelephone(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Retype Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button>submit</button>
      </Form>
    </>
  );
};

export default SignUpPage;
