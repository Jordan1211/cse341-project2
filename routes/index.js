const { index } = require('../controllers');
const routes = require('express').Router();

routes.get('/', index);
module.exports = routes;
