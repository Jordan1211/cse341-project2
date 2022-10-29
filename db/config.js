const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: process.env.MONGODB_URI,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  authorizationHost: process.env.AUTHORIZATION_HOST,
  redirectUrl: process.env.REDIRECT_URL
};
