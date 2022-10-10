const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
// const Post = require('../models/Post');

const getData = async (req, res) => {
  const result = await mongodb.getDb().db().collection('family').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection('family')
    .findOne({ _id: ObjectId(req.params.id) });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
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

// const updateById = async (req, res) => {
//   try {
//     const result = await mongodb
//       .getDb()
//       .db('contacts')
//       .collection('contacts')
//       .updateOne(
//         { _id: ObjectId(req.params.id) },
//         {
//           $set: {
//             favoriteColor: req.body.favoriteColor
//           }
//         }
//       );
//     console.log('Your update has been successful');
//     res.setHeader('Content-Type', 'application/json');
//     res.status(204).json(result);
//   } catch (err) {
//     res.status(500).json(response.error || 'Some error occurred while updating the contact.');
//   }
// };

// const deleteById = async (req, res) => {
//   try {
//     const result = await mongodb
//       .getDb()
//       .db('contacts')
//       .collection('contacts')
//       .deleteOne({ _id: ObjectId(req.params.id) });
//     console.log('The contact was Deleted');
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
//   }
// };

// const deleteManyByName = async (req, res) => {
//   try {
//     const result = await mongodb
//       .getDb()
//       .db('contacts')
//       .collection('contacts')
//       .deleteMany({ firstName: req.body.firstName });
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json(response.error || 'Some error occurred while deleting the many contacts.');
//   }
// };

module.exports = {
  getData,
  getSingle,
  createNewFamily
  //   updateById,
  //   deleteById,
  //   deleteManyByName
};
