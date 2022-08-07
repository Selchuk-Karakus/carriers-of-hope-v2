// All validators return TRUE or FALSE depending on whether the string passed in is valid or not

// Can only contain letters a-z in lowercase or uppercase
const isValidFirstName = (userName) => {
  return /^[a-zA-Z]+$/.test(userName);
};

const isValidLastName = (userName) => {
  return /^[a-zA-Z]+$/.test(userName);
};

// Can contain letters/numbers and characters minimum 4 required
const isValidAddress = (address) => {
  return /^(?=.*\d)(?=.*[a-zA-Z]).{4,}$/gm.test(address);
};

// Can only contain letters a-z in lowercase or uppercase minimum 3
const isValidTownOrCity = (townOrCity) => {
  return /^[a-zA-Z]{3,}$/.test(townOrCity);
};

// Must be a valid postcode | The RegEx supplied by the UK Government is:
const isValidPostcode = (postcode) => {
  return /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(
    postcode
  );
};

// Can only contain letters a-z in lowercase or uppercase
const isValidCountry = (country) => {
  return /^[a-zA-Z]+$/.test(country);
};

// Must be a valid email address
const isValidEmail = (email) => {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
};

// The telephone number must be in the format of +447222555555 | +44 7222 555 555 | (0722) 5555555
const isValidTelephone = (telephone) => {
  return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
    telephone
  );
};

// Must contain at least 5 letters
const isValidPassword = (password) => {
  return /^[a-zA-Z]{5,}/.test(password);
};

// Must contain at least 5 letters
const isValidPasswordConf = (password) => {
  return /^[a-zA-Z]{5,}/.test(password);
};

// Must be TRUE for all fields for form data to be valid
const isValidForm = () => {
  return (
    isValidFirstName() &&
    isValidLastName() &&
    isValidPassword() &&
    isValidEmail() &&
    isValidTelephone() &&
    isValidAddress() &&
    isValidTownOrCity() &&
    isValidCountry() &&
    isValidPasswordConf() &&
    isValidPostcode()
  );
};

export {
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
};
