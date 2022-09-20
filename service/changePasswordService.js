const nodemailer = require('nodemailer');
const { getMemberByEmail, getMemberById } = require("./members");
const {updatePassword} = require("../dal/membersDAL");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//send email
async function sendEmail(email) {
    const memberObj = await getMemberByEmail(email);
    // get the jwtSecretKey from the .env file
    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    const userEmail =   process.env.NODEMAILER_SEND_EMAIL_ADDRESS;
    const userPassword = process.env.NODEMAILER_SEND_EMAIL_PASSWORD;

    if(memberObj){        
        const token =  jwt.sign(memberObj, jwtSecretKey, {expiresIn:'15m'});
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: userEmail,    // Your email id
                pass: userPassword // Your password
            }
        });
    
       var mailOptions = {
           from: 'mahriaa88@gmail.com',
           to: memberObj.email,
           subject: 'Reset Password Link - CarriersHope.com',
           html: '<p>You requested for reset password, kindly use this <a href="https://carriers-of-hope-deploy.herokuapp.com/change-password/'+ memberObj.id +'/'+ token + '">https://carriers-of-hope-deploy.herokuapp.com/change-password</a> to reset your password</p>'
    
    
       };
    
       transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Message %s sent: %s', info.messageId, info.response);
                transporter.close();
            }
        });
        return {
            statusCode: 201,
            message: 'mail sent',
        };
     } else {
        return {
            statusCode: 401,
            message: "Incorrect email or password",
        };
    }
}

const resetPassword = async (reqParam, password, res)=>{
    const id = Number(reqParam.id);
    const user = (await getMemberById(id))[0];
    if(id !== user.id){
        return {
            statusCode: 401,
            message: "Invalid id...",
          };
    } 

    const token = reqParam.token;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    // hash the password using bycrypt 
    let hashedPassword = await bcrypt.hash(password, 10);
    try {
        const { rows } = await updatePassword(id, hashedPassword);
        return rows;
      } catch (error) {
        res.json({ message: error.message });
      }
  
  }
  

module.exports = {sendEmail,resetPassword}
