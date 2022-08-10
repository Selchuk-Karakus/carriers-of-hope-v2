let router = require("express").Router();
let {sendEmail} = require('../service/changePasswordService');


router.post("/", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  sendEmail(req.body.email)
    .then((email) => {
      return res.status(201).json(email);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });

 });
 

 module.exports = router;