// const mongoose = require('mongoose');

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

module.exports = (mongoose) => {
  const holiday = mongoose.model(
    'holiday',
    mongoose.Schema({
      name: {
        type: String
      },
      occurence: {
        type: String
      },
      group: {
        type: String
      }
    })
  );

  return holiday;
};

//mongodb joins
