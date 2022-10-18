const Family = require('../models/family');

const getData = async (req, res) => {
  const result = Family.find();
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
  const family = {
    familyName: req.body.familyName,
    contracts: req.body.contracts,
    childLastName: req.body.childLastName,
    childFirstName: req.body.childFirstName,
    childDOB: req.body.childDOB,
    parent1userId: req.body.parent1userId,
    parent2userId: req.body.parent2userId,
    holidayId: req.body.holidayId
  };

  try {
    const result = await mongodb.getDb().db().collection('family').insertOne(family);
    console.log('The family was created');
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while creating the family.');
  }
};

const updateById = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection('family')
      .updateOne(
        { _id: ObjectId(req.params.id) },
        {
          $set: {
            childFirstName: req.body.childFirstName
          }
        }
      );
    console.log('Your update has been successful');
    res.setHeader('Content-Type', 'application/json');
    res.status(204).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while updating the family.');
  }
};

const deleteById = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection('family')
      .deleteOne({ _id: ObjectId(req.params.id) });
    console.log('The contact was Deleted');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the family.');
  }
};

module.exports = {
  getData,
  getSingle,
  createNewFamily,
  updateById,
  deleteById
};
