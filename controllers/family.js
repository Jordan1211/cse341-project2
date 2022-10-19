const Family = require('../models/family');

const getData = async (req, res) => {
  const result = Family.find();
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
  Family.find({ _id: req.params.id })
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

const createNewFamily = async (req, res) => {
  try {
    const family = new Family(req.body);
    family
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

const updateFamilyNameById = async (req, res) => {
  try {
    const familyId = req.params.id;

    Family.findOne({ _id: familyId }, function (err, family) {
      family.familyName = req.body.familyName;

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
    const familyId = req.params.id;

    Family.deleteOne({ _id: familyId }, function (err, result) {
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
  createNewFamily,
  updateFamilyNameById,
  deleteById
};
