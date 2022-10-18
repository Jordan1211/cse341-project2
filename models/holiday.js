const mongoose = require('mongoose');

// const PostSchema = mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   favoriteColor: {
//     type: String,
//     required: true,
//   },
//   birthday: {
//     type: Date,
//     required: true,
//   },
// });

// module.exports = mongoose.model('contacts', PostSchema);

// module.exports = (mongoose) => {
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
