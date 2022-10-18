const mongoose = require('mongoose');

const holidaySchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    occurence: {
      type: String
    },
    group: {
      type: String
    }
  },
  { collection: 'holiday' }
);

module.exports = mongoose.model('holiday', holidaySchema);
