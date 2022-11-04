const appConfig = require('../db/config');
const User = require('../models/user');

const loadUser = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const authZeroUser = await fetchAuthZeroUser(req.headers.authorization);
    const user = await findOrCreateUser(authZeroUser);

    req.user = user;

    console.log(user);

    next();
  } catch (_error) {
    next();
  }
};

const fetchAuthZeroUser = async (authorizationValue) => {
  const response = await fetch(`${appConfig.authorizationHost}/userinfo`, {
    headers: { Authorization: authorizationValue }
  });

  return response.json();
};

const findOrCreateUser = async (authZeroUserJson) => {
  if (!authZeroUserJson) return;

  const existingUser = await User.findOne({ identifier: authZeroUserJson.sub });

  if (existingUser) return existingUser;

  const NewUser = await User.create({
    identifier: authZeroUserJson.sub,
    firstName: authZeroUserJson.given_name,
    lastName: authZeroUserJson.family_name,
    userName: authZeroUserJson.nickname,
    email: authZeroUserJson.email
  });

  return NewUser;
};

module.exports = loadUser;
