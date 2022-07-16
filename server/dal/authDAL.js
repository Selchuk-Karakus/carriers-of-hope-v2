const pgClient = require("../config/postgres");

const selectMemberByEmailAndPassword = (email, password) => {
  return pgClient.pool.query(
    "SELECT * FROM members WHERE email = $1 AND password = $2;",
    [email, password]
  );
};

module.exports = {
  selectMemberByEmailAndPassword,
};
