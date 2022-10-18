const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
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
