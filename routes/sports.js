const express = require('express');
const sportsController = require('../controller/sports');

const router = express.Router();

router.get('/', sportsController.getSports);

module.exports = router;
