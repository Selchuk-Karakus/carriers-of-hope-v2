let router = require("express").Router();
let {
  getMembers,
  getMemberById,
  createMembers,
  updateMemberById,
  deleteMemberById,
  checkEmailAndPassword,
} = require("../service/members");

router.post('/auth', function(req, res) {
  checkEmailAndPassword(req.body)
    .then((userObj) => {
      if(!userObj.id){
        res.send("Incorrect email and/or Password!");
      } else {
       req.session.loggedin = true;
       req.session.email = userObj.email;
       req.session.userId = userObj.id;
       res.redirect('/');
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});  

//Send a GET request to /members to READ(view) a list of members
router.get("/", (req, res) => {
  getMembers().then((member) => {
    res.status(200).json(member);
  });
});

//Send a GET request to /members/:id to READ(view) a member
router.get("/:id", (req, res) => {
  const memberId = Number(req.params.id);
  getMemberById(memberId, res).then((product) => {
    res.status(200).json(product);
  });
});

//Send a POST request to /members to CREATE a new member
router.post("/", (req, res) => {
  createMembers(req.body, res).then((member) => {
    res.status(201).send({
      message: "Member added successfully!",
      body: {
        member: req.body,
      },
    });
  });
});

//SEND a PUT request to /members/:id to UPDATE(edit) a member
router.put("/:id", (req, res) => {
  const memberId = Number(req.params.id);
  updateMemberById(memberId, req.body, res).then((member) => {
    res.status(201).send({
      message: "Member added successfully!",
      body: {
        member: req.body,
      },
    });
  });
});

//Send a DELETE request to members/:id to  DELETE a member
router.delete("/:id", (req, res) => {
  const memberId = Number(req.params.id);
  deleteMemberById(memberId, res).then((member) => {
    res
      .status(200)
      .send({ message: "Member deleted successfully!", memberId });
  });
});

module.exports = router;
