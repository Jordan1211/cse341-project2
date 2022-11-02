const mongoose = require('mongoose');

const holidaySchema = mongoose.Schema(
  {
    amount: {
      type: Number
    },
    category: {
      type: String
    },
    // Could be based off identifier
    to_parent: {
      type: String
    },
    // Could be based off identifier
    from_parent: {
      type: String
    },
    date: {
      type: Date
    }
  },
  { collection: 'finance' }
);

module.exports = mongoose.model('finance', holidaySchema);
