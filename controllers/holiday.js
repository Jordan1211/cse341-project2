const db = require('../models');
const Holiday = db.holiday;

const getData = async (req, res) => {
  const result = Holiday.find({});
  // result.then((lists) => {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.status(200).json(lists);
  // });

  result
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });

  //   Holiday.find()
  //     .then((data) => {
  //       if (!data) res.status(404).send({ message: 'Not found' });
  //       else res.send(data[0]);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: 'Error retrieving',
  //         error: err
  //       });
  //     });
};

const getSingle = async (req, res) => {
  const result = Holiday.findOne({ _id: ObjectId(req.params.id) });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);

  // Holiday.find({ _id: ObjectId(req.params.id) })
  //   .then((data) => {
  //     if (!data) res.status(404).send({ message: 'Not found' });
  //     else res.send(data[0]);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: 'Error retrieving',
  //       error: err
  //     });
  //   });
};

const createNewHoliday = async (req, res) => {
  const holiday = {
    name: req.body.name,
    occurence: req.body.occurence,
    group: req.body.group
  };

  try {
    const result = Holiday.insertOne(holiday);
    console.log('The holiday was created');
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while creating the holiday.');
  }
};

const updateById = async (req, res) => {
  try {
    const result = Holiday.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $set: {
          name: req.body.name
        }
      }
    );
    console.log('Your update has been successful');
    res.setHeader('Content-Type', 'application/json');
    res.status(204).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while updating the holiday.');
  }
};

const deleteById = async (req, res) => {
  try {
    const result = Holiday.deleteOne({ _id: ObjectId(req.params.id) });
    console.log('The contact was Deleted');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the holiday.');
  }
};

const deleteManyByName = async (req, res) => {
  try {
    const result = Holiday.deleteMany({ name: req.body.name });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the many holidays.');
  }
};

module.exports = {
  getData,
  getSingle,
  createNewHoliday,
  updateById,
  deleteById,
  deleteManyByName
};
