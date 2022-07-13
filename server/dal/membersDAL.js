const pgClient = require("../config/postgres");

//Make a query for all Members
const selectAllMembers = () => {
  return pgClient
  .pool
  .query("SELECT * FROM members ORDER BY id ASC")
  };

//Make a query for a member
const selectMemberById = (memberId) => {
  return pgClient.pool.query(
    "SELECT * FROM members WHERE id=$1", [memberId]
  );
}

//Insert a new member entry.
const insertMember = async (reqBody) => {
  let {first_name, last_name, email, address, city, postcode, country, telephone, password, isAdmin} = reqBody;

    return pgClient.pool
      .query(
        "INSERT INTO members (first_name, last_name, email, address, city, postcode, country, telephone, password, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [
          first_name,
          last_name,
          email,
          address,
          city,
          postcode,
          country,
          telephone,
          password,
          isAdmin,
        ]
      )
    };

//Update a member by editing entries.
const updateEditMemberById = async (memberId, reqBody) => {

  let {
    first_name,
    last_name,
    email,
    address,
    city,
    postcode,
    country,
    telephone,
    password,
    isAdmin,
  } = reqBody;

  return pgClient.pool
    .query(
      "UPDATE members SET first_name = $1, last_name = $2, email = $3, address = $4, city = $5, postcode = $6, country = $7, telephone = $8, password = $9, isAdmin = $10 WHERE id = $11 RETURNING *" ,
      [
        first_name,
        last_name,
        email,
        address,
        city,
        postcode,
        country,
        telephone,
        password,
        isAdmin,
        memberId
      ]
    )
};

//Delete a member with a specific id
const deleteMemberByIdDb = async (memberId) => {
  return await pgClient.pool
    .query("DELETE FROM members WHERE id = $1", [memberId]);
};

module.exports = {
  selectAllMembers,
  selectMemberById,
  insertMember,
  updateEditMemberById,
  deleteMemberByIdDb
}