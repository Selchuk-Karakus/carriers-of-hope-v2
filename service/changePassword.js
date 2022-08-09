//send email
function sendEmail(email, token) {
 
   var email = email;
   var token = token;

   var mail = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: '', // Your email id
           pass: '' // Your password
       }
   });

   var mailOptions = {
       from: 'tutsmake@gmail.com',
       to: email,
       subject: 'Reset Password Link - Tutsmake.com',
       html: '<p>You requested for reset password, kindly use this <a href="http://localhost:4000/reset-password?token=' + token + '">link</a> to reset your password</p>'

   };

   mail.sendMail(mailOptions, function(error, info) {
       if (error) {
           console.log(1)
       } else {
           console.log(0)
       }
   });
}