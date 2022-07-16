const {
  selectAllMembers,
  selectMemberById,
  insertMember,
  updateEditMemberById,
  deleteMemberByIdDb,
  selectMemberByEmailAndPassword,
} = require("../dal/membersDAL");

function isAdmin() {
  return false;
}

const getMemberByEmailAndPassword = async (email, password) => {
  const result = await selectMemberByEmailAndPassword(email, password);
  //if user record exist, then do the following 
  if(result.rows.length > 0) {
    return {
      id: result.rows[0].id,
      email: result.rows[0].email,
      isAdmin: result.rows[0].isAdmin,
    };
  }
}

//GET all members.
const getMembers = async (req, res) => {
  try {
    const { rows } = await selectAllMembers();
    return rows;
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

//GET a member by id
const getMemberById = async (memberId, res) => {
  try {
    const { rows } = await selectMemberById(memberId);
    return rows;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//CREATE a member
const createMembers = async (body, res) => {
  try {
    const { rows } = await insertMember(body);
    return rows;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE a member by id
const updateMemberById = async (memberId, reqBody, res) => {
  try {
    const { rows } = await updateEditMemberById(memberId, reqBody);
    return rows;
  } catch (error) {
    res.json({ message: error.message });
  }
};

//DELETE a member by id
const deleteMemberById = async (memberId, res) => {
  try {
    const { rows } = await deleteMemberByIdDb(memberId);
    return rows;
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getMembers,
  getMemberById,
  createMembers,
  updateMemberById,
  deleteMemberById,
  isAdmin,
  getMemberByEmailAndPassword
};
