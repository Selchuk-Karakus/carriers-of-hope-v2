let router = require("express").Router();

// GET /register
router.get("/signup", function (req, res, next) {
  return res.send("Signup today!");
});

// POST /register
router.post("/signup", function (req, res, next) {
  return res.send("User created!");
});

module.exports = router;
