module.exports = (mongoose) => {
  const family = mongoose.model(
    'family',
    mongoose.Schema({
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
    })
  );

  return family;
};
