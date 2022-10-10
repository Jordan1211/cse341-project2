const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
// const Post = require('../models/Post');

const getData = async (req, res) => {
  const result = await mongodb.getDb().db().collection('holiday').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection('holiday')
    .findOne({ _id: ObjectId(req.params.id) });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

const createNewHoliday = async (req, res) => {
  const holiday = {
    name: req.body.name,
    occurence: req.body.occurence,
    group: req.body.group
  };

  try {
    const result = await mongodb.getDb().db().collection('holiday').insertOne(holiday);
    console.log('The holiday was created');
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(response.error || 'Some error occurred while creating the holiday.');
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
  createNewHoliday
  //   updateById,
  //   deleteById,
  //   deleteManyByName
};
