const User = require('../models/user');
// const { authSchema } = require('../db/validation');

const getData = async (req, res) => {
  const result = User.find();
  result
    .then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

const getSingle = async (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found' });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving',
        error: err
      });
    });
};

const createNewUser = async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    familyName: req.body.familyName,
    notes: req.body.notes
  };

  try {
    const validate = await authSchema.validateAsync(req.body);
    const result = await mongodb.getDb().db().collection('user').insertOne(user);
    console.log('The user was created');
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
    if (error.isJoi === true) error.status = 422;
    res.status(500).json(response.error || 'Some error occurred while creating the user.');
  }
};

const updateById = async (req, res) => {
  try {
    const result = await mongodb;
    await mongodb
      .getDb()
      .db()
      .collection('user')
      .updateOne(
        { _id: ObjectId(req.params.id) },
        {
          $set: {
            firstName: req.body.firstName
          }
        }
      );
    console.log('Your update has been successful');
    res.setHeader('Content-Type', 'application/json');
    res.status(204).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while updating the user.');
  }
};

const deleteById = async (req, res) => {
  try {
    const result = await mongodb;
    await mongodb
      .getDb()
      .db()
      .collection('user')
      .deleteOne({ _id: ObjectId(req.params.id) });
    console.log('The contact was Deleted');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};

module.exports = {
  getData,
  getSingle,
  createNewUser,
  updateById,
  deleteById
};
