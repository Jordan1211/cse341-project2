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
    // Could be based off identifier
    parent1userId: {
      type: String
    },
    // Could be based off identifier
    parent2userId: {
      type: String
    },
    holidayId: {
      type: Number
    }
  },
  { collection: 'family' }
);

module.exports = mongoose.model('family', familySchema);
