const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
      if(err) {
        res.status(401).json({ message: 'Something went wrong.' })
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    })
  } else {
    res.status(401).json({ message: "There was a problem with your request." });
  }
}