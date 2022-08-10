const nodemailer = require('nodemailer');
const { getMemberByEmail } = require("./members");
const jwt = require("jsonwebtoken");

//send email
async function sendEmail(email) {
    const memberObj = await getMemberByEmail(email);
   
    // get the jwtSecretKey from the .env file
    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    const userEmail =   process.env.NODEMAILER_SEND_EMAIL_ADDRESS;
    const userPassword = process.env.NODEMAILER_SEND_EMAIL_PASSWORD;

   
     // generate JWT token using jsonwebtoken library with jwtSecrectKey
     if(!memberObj){y
        return {
            statusCode: 401,
            message: "The user is not exits",
          };
     } else{
        const token =  jwt.sign(memberObj.password, jwtSecretKey);
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: userEmail,    // Your email id
                pass:  userPassword// Your password
            }
        });
    
       var mailOptions = {
           from: userEmail,
           to: memberObj.email,
           subject: 'Reset Password Link - CarriersHope.com',
           html: '<p>You requested for reset password, kindly use this <a href="http://localhost:3000/change-password' + token + '">link</a> to reset your password</p>'
    
    
       };
    
       transporter.sendMail(mailOptions, function(error, info) {
           if (error) {
               console.log(error)
           } else {
            console.log('Message %s sent: %s', info.messageId, info.response)
            transporter.close();
           }
       });

     }
     
}

module.exports = {sendEmail}
