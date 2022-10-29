const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    // identifier: {
    //   type: String
    // },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    userName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    familyName: {
      type: String
    },
    notes: {
      type: String
    }
  },
  { collection: 'user' }
);

module.exports = mongoose.model('user', userSchema);
