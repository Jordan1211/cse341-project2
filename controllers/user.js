const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
// const Post = require('../models/Post');

const getData = async (req, res) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection('user')
    .findOne({ _id: ObjectId(req.params.id) });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

const createNewUser = async (req, res) => {
  const holiday = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    familyName: req.body.familyName,
    notes: req.body.notes
  };

  try {
    const result = await mongodb.getDb().db().collection('user').insertOne(holiday);
    console.log('The user was created');
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
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
            favoriteColor: req.body.favoriteColor
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

const deleteManyByName = async (req, res) => {
  try {
    const result = await mongodb;
    await mongodb.getDb().db().collection('user').deleteMany({ firstName: req.body.firstName });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while deleting the many users.');
  }
};

module.exports = {
  getData,
  getSingle,
  createNewUser,
  updateById,
  deleteById,
  deleteManyByName
};
