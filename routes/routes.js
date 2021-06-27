const express = require('express');
const middlewares = require('../middlewares/request_data');
const sportsController = require('../controller/sports');

const router = express.Router();

// Sports routes
router.get('/sports', middlewares.requestData, sportsController.getSports);

module.exports = router;
