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

    if(!memberObj){
        return {
            statusCode: 401,
            message: "The Email is not registered with us",
          };
     } else{
        const payload={
            email:memberObj.email, 
            id:memberObj.id
        }
        const token =  jwt.sign(payload, jwtSecretKey, {expiresIn:'15m'});
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: userEmail,    // Your email id
                pass:  userPassword // Your password
            }
        });
    
       var mailOptions = {
           from: userEmail,
           to: memberObj.email,
           subject: 'Reset Password Link - CarriersHope.com',
           html: '<p>You requested for reset password, kindly use this <a href="https://carriers-of-hope-deploy.herokuapp.com/change-password/' + token + '">link</a> to reset your password</p>'
    
    
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


/* update password to database 
router.post('/update-password', function(req, res, next) {
 
    var token = req.body.token;
    var password = req.body.password;
 token
   connection.query('SELECT * FROM users WHERE token ="' + token + '"', function(err, result) {
        if (err) throw err;
 
        var type
        var msg
 
        if (result.length > 0) {
                
              var saltRounds = 10;
 
             // var hash = bcrypt.hash(password, saltRounds);
 
            bcrypt.genSalt(saltRounds, function(err, salt) {
                  bcrypt.hash(password, salt, function(err, hash) {
 
                   var data = {
                        password: hash
                    }
 
                    connection.query('UPDATE users SET ? WHERE email ="' + result[0].email + '"', data, function(err, result) {
                        if(err) throw err
                   
                    });
 
                  });
              });
 
            type = 'success';
            msg = 'Your password has been updated successfully';
              
        } else {
 
            console.log('2');
            type = 'success';
            msg = 'Invalid link; please try again';
 
            }
 
        req.flash(type, msg);
        res.redirect('/');
    });
})
*/
module.exports = {sendEmail}
