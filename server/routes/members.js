let router = require("express").Router();
let members = require("../dal/membersDAL");

router.get("/", members.getMembers); // Get All Members
router.get("/:memberId", members.getMemberById); // Get a Member by id
router.post("/", members.createMembers); // Create a Member
router.put("/:memberId", members.updateMemberById); // Update a Member by id
router.delete("/:memberId", members.deleteMemberById); // Delete a Member by id

module.exports = router;
