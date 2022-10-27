// const appConfig = require('../db/config');
// const User = require('../models/user');

// const loadUser = async (req, res, next) => {
//   const authZeroUser = await fetchAuthZeroUser(req.headers.authorization);
//   const user = await findOrCreateUser(authZeroUser);

//   req.user = user;

//   console.log(authZeroUser);

//   next();
// };

// const fetchAuthZeroUser = async (authorizationValue) => {
//   const response = await fetch(`${appConfig.authorizationHost}/userinfo`, {
//     headers: { Authorization: authorizationValue }
//   });

//   return response.json();
// };

// const findOrCreateUser = async (authZeroUserJson) => {
//   if (!authZeroUserJson) return;

//   const existingUser = await User.findOne({ identifier: authZeroUserJson.sub });

//   if (existingUser) return existingUser;

//   const NewUser = await User.create({
//     identifier: authZeroUserJson.sub,
//     email: authZeroUserJson.email
//   });

//   return NewUser;
// };

// module.exports = loadUser;
