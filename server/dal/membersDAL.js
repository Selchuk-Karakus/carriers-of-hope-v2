const pool = require("../config/db");

//Get all members.
exports.getMembers = async (req, res) => {
  let results = await pool
    .query("SELECT * FROM members ORDER BY id ASC")
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
  return results;
};

//Get a member
exports.getMemberById = async (req, res) => {
  const { memberId } = req.params;
  let results = await pool
    .query("SELECT * FROM members WHERE id=$1", [memberId])
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
  return results;
};

//Create a member.
exports.createMembers = async (req, res) => {
  let {first_name, last_name, email, address, city, postcode, country, telephone, password, isAdmin} = req.body;
  console.log("HELLO", first_name);

     await pool
   .query("INSERT INTO members (first_name, last_name, email, address, city, postcode, country, telephone, password, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [
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
       ])
   .catch(console.log);
  return;
};

//Update a member.
exports.updateMemberById = async (req, res) => {
  let memberId = Number(req.params.memberId);

  console.log("HELLO", memberId);
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
  } = req.body;
  await pool
    .query(
      "UPDATE members SET first_name = $1, last_name = $2, email = $3, address = $4, city = $5, postcode = $6, country = $7, telephone = $8, password = $9, isAdmin = $10 WHERE id = $11 " ,
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
    .then(() => {
      res.json(`Member ${memberId} updated`);
      console.log(`Member ${memberId} updated`);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

//Delete a member.
exports.deleteMemberById = async (req, res) => {
  let memberId = Number(req.params.memberId);
  await pool
    .query("DELETE FROM members WHERE id = $1", [memberId])
    .then(() => res.send(`Member ${memberId} deleted`))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};
