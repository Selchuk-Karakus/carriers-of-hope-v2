import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.scss";
import { signUp } from "../services/authService";
import { login } from "../services/authService";
import {
  isValidFirstName,
  isValidLastName,
  isValidPassword,
  isValidEmail,
  isValidTelephone,
  isValidAddress,
  isValidTownOrCity,
  isValidCountry,
  isValidPasswordConf,
  isValidPostcode,
  isValidForm,
} from "../services/validationService";
import { UserContext } from "../Contexts/UserContext";

const SignUpPage = () => {
  const { user, setUser } = useContext(UserContext);

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
    error: false,
    errorPassword: false,
    submit: false,
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

  // Tooltip displays informative text when users enters bad/incorrect data
  const showOrHideTip = (show, element) => {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  };

  //  accepts a validator and produces an event listener for every validator
  const onChange = (validator) => {
    return (e) => {
      const text = e.target.value;
      const valid = validator(text);
      setFormData({ ...formData, [e.target.name]: e.target.value });
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  };

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
      setFormData({ ...formData, error: true });
    } else if (password !== confirmPassword) {
      setFormData({ ...formData, errorPassword: true });
    } else {
      setFormData({ ...formData, submit: true });
    }

    // if all validators comeback TRUE signup and login the new user
    if (isValidForm()) {
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
              setUser({
                isLoggedIn: res.signedIn,
                isAdmin: res.isAdmin,
              });
              navigate("/admin/dashboard");
            } else if (res.signedIn) {
              setUser({
                isLoggedIn: res.signedIn,
                isAdmin: false,
              });
              console.log(res.statusText);
              navigate("/products");
            } else {
              console.log(res.statusText);
            }
          });
        }
      });
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        {" "}
        {"< "}back
      </button>

      <div className="signUp-container">
        <h1 className="signUp-header">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <p>
            <input
              id="first_name"
              className="form-control"
              type="text"
              name="first_name"
              onChange={onChange(isValidFirstName)}
            />
            <span>Can only contain letters a-z</span>
          </p>
          <label htmlFor="last_name">Last Name</label>
          <p>
            <input
              id="last_name"
              className="form-control"
              type="text"
              name="last_name"
              onChange={onChange(isValidLastName)}
            />
            <span>Can only contain letters a-z</span>
          </p>
          <label htmlFor="address">Address Line 1</label>
          <p>
            <input
              id="address"
              className="form-control"
              type="text"
              name="address"
              onChange={onChange(isValidAddress)}
            />
            <span>Enter door number followed by street name</span>
          </p>
          <label htmlFor="city">Town/City</label>
          <p>
            <input
              id="city"
              className="form-control"
              type="text"
              name="city"
              onChange={onChange(isValidTownOrCity)}
            />
            <span>Can only contain letters a-z</span>
          </p>
          <label htmlFor="postcode">Postcode</label>
          <p>
            <input
              id="postcode"
              className="form-control"
              type="text"
              name="postcode"
              onChange={onChange(isValidPostcode)}
            />
            <span>Must be valid UK postcode</span>
          </p>
          <label htmlFor="country">Country</label>
          <p>
            <input
              id="country"
              className="form-control"
              type="text"
              name="country"
              onChange={onChange(isValidCountry)}
            />
            <span>Can only contain letters a-z</span>
          </p>
          <label htmlFor="email">Email</label>
          <p>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="email@example.com"
              name="email"
              onChange={onChange(isValidEmail)}
            />
            <span>Must be a valid email address</span>
          </p>
          <label htmlFor="telephone">Phone Number</label>
          <p>
            <input
              id="telephone"
              className="form-control"
              type="tel"
              name="telephone"
              onChange={onChange(isValidTelephone)}
            />
            <span>The telephone number must be in a valid UK number</span>
          </p>
          <label htmlFor="password">Password</label>
          <p>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              name="password"
              onChange={onChange(isValidPassword)}
            />
            <span>Must contain at least 5 characters letters or numbers</span>
          </p>
          <label htmlFor="confirmPassword">Retype Password</label>
          <p>
            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              name="confirmPassword"
              onChange={onChange(isValidPasswordConf)}
            />
            <span>Passwords must match</span>
          </p>
          <button className="sign-up-btn">Sign Up</button>
        </form>
        {formData.error ? (
          <div className="error-message">All fields must be field in.</div>
        ) : formData.errorPassword ? (
          <div className="error-message">Password doesnt match.</div>
        ) : null}
      </div>
    </>
  );
};

export default SignUpPage;
