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
  // const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);

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
      // setError(true);
    } else {
      // setSubmitted(true);
      // setError(false);
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

  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      {/* Calling to the methods */}
      {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div> */}
      <Form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Address Line 1</label>
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>City</label>
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Post Code</label>
        <input
          type="text"
          name="postcode"
          onChange={(e) => setPostcode(e.target.value)}
        />
        <label>Country</label>
        <input
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
        <label>Telephone</label>
        <input
          type="tel"
          name="phone"
          //           pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$
          // "
          onChange={(e) => setTelephone(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Retype Password:</label>
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
