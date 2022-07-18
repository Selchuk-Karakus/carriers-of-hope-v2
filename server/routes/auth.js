let router = require("express").Router();
let { checkEmailAndPassword } = require("../service/authService");
let { insertMember } = require("../dal/membersDAL");
const bcrypt = require("bcrypt");

//POST to /login
router.post("/login", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");

  checkEmailAndPassword(req.body)
    .then((resObj) => {
      return res.status(resObj.statusCode).json(resObj.message);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

//POST /register
router.post("/register", async function (req, res, next) {
  // check that user typed in all fields in the form
  
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.address &&
    req.body.city &&
    req.body.postcode &&
    req.body.country &&
    req.body.telephone &&
    req.body.password
  ) {
    // if all fields are ticked off store data into user variable
    let user = req.body;
    // confirm that user typed same password twice
    if (user.password !== user.confirmPassword) {
      let err = new Error("Passwords do not match.");
      err.status = 400;
      return next(err);
    }

    // hash the password using bycrypt 
    let hashedPassword = await bcrypt.hash(user.password, 10);

    // create a new object with form input and hashed password to store in postgresql
    const userToStore = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      address: user.address,
      city: user.city,
      postcode: user.postcode,
      country: user.country,
      telephone: user.telephone,
      password: hashedPassword,
      isAdmin: false,
    };

    //use create/insert method to insert object into postgresql database
    insertMember(userToStore);
    //tell client that request made is a success!
    res.status(201).send();
  } else {
    let err = new Error("All fields required.");
    err.status = 400;

    console.log(err);
    return next(err);
  }
});

module.exports = router;
