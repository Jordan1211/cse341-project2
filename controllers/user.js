const User = require('../models/user');
// const { authSchema } = require('../db/validation');
const passwordUtil = require('../db/validation');

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
    password: req.body.password,
    familyName: req.body.familyName,
    notes: req.body.notes
  };

  try {
    // const validate = await authSchema.validateAsync(req.body);
    if (!req.body.username || !req.body.password) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    const password = req.body.password;
    const passwordCheck = passwordUtil.passwordPass(password);
    if (passwordCheck.error) {
      res.status(400).send({ message: passwordCheck.error });
      return;
    }

    const result = await mongodb.getDb().db().collection('user').insertOne(user);
    console.log('The user was created');
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
    if (error.isJoi === true) error.status = 422;
    res.status(500).json(response.error || 'Some error occurred while creating the user.');
  }
};

const updateFirstNameById = async (req, res) => {
  try {
    const userId = req.params.id;

    User.findOne({ _id: userId }, function (err, user) {
      user.firstName = req.body.firstName;

      user.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the contact.');
        } else {
          res.status(204).send();
        }
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const userId = req.params.id;

    User.deleteOne({ _id: userId }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the contact.');
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getData,
  getSingle,
  createNewUser,
  updateFirstNameById,
  deleteById
};
