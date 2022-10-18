const mongoose = require('mongoose');

const familySchema = mongoose.Schema(
  {
    familyName: {
      type: String
    },
    contracts: {
      type: String
    },
    childLastName: {
      type: String
    },
    childFirstName: {
      type: String
    },
    childDOB: {
      type: Date
    },
    parent1userId: {
      type: Number
    },
    parent2userId: {
      type: Number
    },
    holidayId: {
      type: Number
    }
  },
  { collection: 'family' }
);

module.exports = mongoose.model('family', familySchema);
