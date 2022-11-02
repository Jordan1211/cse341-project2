const Record = require('../models/finance');

const getData = async (req, res) => {
  const result = Record.find();
  result
    .then((lists) => {
      res.status(200).json(lists);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

const getSingle = async (req, res) => {
  Record.find({ _id: req.params.id })
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

const createNewRecord = async (req, res) => {
  try {
    if (
      !req.body.amount ||
      !req.body.category ||
      !req.body.to_parent ||
      !req.body.from_parent ||
      !req.body.date
    ) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    const record = new Record(req.body);
    record
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the finance record.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateAmountById = async (req, res) => {
  try {
    const recordId = req.params.id;

    Record.findOne({ _id: recordId }, function (err, record) {
      record.amount = req.body.amount;

      record.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the finance record.');
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
    const recordId = req.params.id;

    Record.deleteOne({ _id: recordId }, function (err, result) {
      record;
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the finance record.');
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the finance record.');
  }
};

module.exports = {
  getData,
  getSingle,
  createNewRecord,
  updateAmountById,
  deleteById
};
