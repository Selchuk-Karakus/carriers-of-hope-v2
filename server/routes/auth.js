let router = require("express").Router();
const bcrypt = require("bcrypt");

//POST to /login
router.post("/login", function (req, res) {
  checkEmailAndPassword(req.body)
    .then((userObj) => {
      if (!userObj.id) {
        res.send("Incorrect email and/or Password!");
      } else {
        req.session.loggedin = true;
        req.session.email = userObj.email;
        req.session.userId = userObj.id;
        res.redirect("/");
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

// POST /register
router.post("/signup", function (req, res, next) {
  return res.send("User created!");
});

// GET /register
router.get("/signup", function (req, res, next) {
  return res.send("Signup today!");
});
module.exports = router;
