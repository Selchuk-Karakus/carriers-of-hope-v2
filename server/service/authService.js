const { getMemberByEmail } = require("../service/members");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//check if user exists
async function checkEmailAndPassword(loginObj) {
  const email = loginObj.email;
  const password = loginObj.password;


  if (email && password) {
    try {
     const memberObj = await getMemberByEmail(email);

      if (memberObj) {
        const matches = await bcrypt.compare(password, memberObj.password);
        //console.log('Password matches: ' + matches);
        if(!matches) {
          return {
          statusCode: 401,
          message: "Incorrect password",
          } 
        }
        // get the jwtSecretKey from the .env file
        const jwtSecretKey = process.env.JWT_SECRET_KEY;

        // modify memberObj to hold current date time
        memberObj.dateTime = new Date();

        // generate JWT token using jsonwebtoken library with jwtSecrectKey
        const token = jwt.sign(memberObj, jwtSecretKey, {
          expiresIn: "24hr",
        });
        // give token to auth routes
        return {
          statusCode: 200,
          message: token,
        };
      } else {
        return {
          statusCode: 401,
          message: "Incorrect email",
        };
      }
    } catch (error) {
      throw error;
    }
  } else {
    return {
      statusCode: 401,
      message: "Incorrect email or password",
    };
  }
}

module.exports = {
  checkEmailAndPassword,
};