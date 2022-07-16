let router = require("express").Router();
let { checkEmailAndPassword, verifyToken } = require("../service/authService");

router.post('/', function(req, res) {
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

module.exports = router;