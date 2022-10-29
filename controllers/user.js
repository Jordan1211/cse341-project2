const User = require('../models/user');
const validate = require('../db/validation');

const getData = async (req, res) => {
  const result = User.find();
  result
    .then((lists) => {
      // res.setHeader('Content-Type', 'application/json');
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
  try {
    if (
      !req.body.username ||
      !req.body.password ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.familyName ||
      !req.body.notes
    ) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }

    const email = req.body.email;
    const emailCheck = validate.emailCheck(email);
    if (emailCheck.error) {
      res.status(400).send({ message: emailCheck.error });
      return;
    }

    const password = req.body.password;
    const passwordCheck = validate.passwordPass(password);
    if (passwordCheck.error) {
      res.status(400).send({ message: passwordCheck.error });
      return;
    }

    const user = new User(req.body);
    user
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the holiday.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
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
