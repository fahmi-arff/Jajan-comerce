const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY
};