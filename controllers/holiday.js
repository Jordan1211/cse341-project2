const Holiday = require('../models/holiday');

const getData = async (req, res) => {
  const result = Holiday.find();
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
  Holiday.find({ _id: req.params.id })
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

const createNewHoliday = async (req, res) => {
  try {
    const holiday = new Holiday(req.body);
    holiday
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

const updateNameById = async (req, res) => {
  try {
    const holidayId = req.params.id;

    Holiday.findOne({ _id: holidayId }, function (err, holiday) {
      holiday.name = req.body.name;
      // holiday.occurence = req.body.occurence;
      // holiday.group = req.body.group;

      holiday.save(function (err) {
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
    const holidayId = req.params.id;

    Holiday.deleteOne({ _id: holidayId }, function (err, result) {
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
  createNewHoliday,
  updateNameById,
  deleteById
};
