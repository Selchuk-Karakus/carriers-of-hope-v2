let router = require("express").Router();
let {sendEmail, resetPassword} = require('../service/changePasswordService');


router.post("/send-email", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  sendEmail(req.body.email)
  .then((resObj) => {
    return res.status(201).json(resObj);
  })
  .catch((error) => {
    console.log(error);
    res.status(500);
  });
 });


router.put("/update/:id/:token", function (req, res) {
  let password = req.body.password
  console.log(password)
  resetPassword(req.params, password, res)
    .then((user) => {
      return res.status(201).send('Password updated');
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });

});
 

 module.exports = router;