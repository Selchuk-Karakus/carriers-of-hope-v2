const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  const tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  const jwtSecretKey = process.env.JWT_SECRET_KEY;


  try {
    const token = req.header(tokenHeaderKey);
    if (!token) {
        return res.status(403).json({message:"Access forbidden"});
    }

    const decoded = jwt.verify(token, jwtSecretKey);
    if (decoded) {
       req.user = decoded;
      return next()
    } else {
      // Access Denied
      return res.status(401).json({ message: "Unauthorised access" });
    }
  } catch (err) {
    return res.status(401).send({ message: "Invalid Token" });
  }
};


module.exports = verifyToken;