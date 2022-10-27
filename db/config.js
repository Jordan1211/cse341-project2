const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: process.env.MONGODB_URI
  // ,
  // port: process.env.PORT || 3000,
  // clientID: process.env.CLIENT_ID,
  // clientSecret: process.env.CLIENT_SECRET,
  // authorizationHost: process.env.AUTHORIZATION_HOST,
  // redirectUri: process.env.REDIRECT_URL
};
