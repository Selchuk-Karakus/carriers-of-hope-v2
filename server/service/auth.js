const { selectMemberByEmailAndPassword } = require("../dal/membersDAL");

const checkEmailAndPassword = async (loginObj) => {
  const email = loginObj.email;
  const password = loginObj.password;

  if (email && password) {
    try {
      const result = await selectMemberByEmailAndPassword(email, password);

      if (result.rows.length > 0) {
        const userObj = {
          email: email,
          id: result.rows[0].id,
        };
        return userObj;
      } else {
        return {};
      }
    } catch (error) {
      throw error;
    }
  } else {
    return {};
  }
};

module.exports = {
  checkEmailAndPassword,
};
