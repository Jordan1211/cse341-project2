module.exports = (mongoose) => {
  const user = mongoose.model(
    'user',
    mongoose.Schema({
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
    })
  );

  return user;
};
