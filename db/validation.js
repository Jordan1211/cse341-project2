const { check } = require('express-validator');

const passwordComplexity = require('joi-password-complexity');

const complexityOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4
};

exports.emailPass = (emailToCheck) => {
  return check(emailToCheck, 'Please include a valid email between 5 & 30 characters')
    .isEmail()
    .isLength({ min: 5, max: 30 });
};

exports.passwordPass = (passwordToCheck) => {
  return passwordComplexity(complexityOptions, 'Password').validate(passwordToCheck);
};
