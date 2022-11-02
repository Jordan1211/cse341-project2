const dbConfig = require('../db/config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.family = require('./family.js')(mongoose);
db.holiday = require('./holiday.js')(mongoose);
db.finance = require('./finance.js')(mongoose);
db.user = require('./user.js')(mongoose);

module.exports = db;
