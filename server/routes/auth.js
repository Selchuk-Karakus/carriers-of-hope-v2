let router = require("express").Router();
let { checkEmailAndPassword } = require("../service/authService");

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

// POST /register
router.post("/signup", function (req, res) {
  return res.send("User created!");
});


module.exports = router;