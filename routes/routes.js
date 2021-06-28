const express = require('express');
const middlewares = require('../middlewares/index');
const sportsController = require('../controller/sports');
const eventsController = require('../controller/events');

const router = express.Router();

// Sports routes
router.get('/sports', middlewares.requestData, sportsController.getSports);
router.get('/sports/all', middlewares.requestDataAllLanguages, sportsController.getSportsAllLanguages);

// Events routes
router.get(
  '/events/:sportId?',
  middlewares.isValidNumberParameter('sportId'),
  middlewares.requestData,
  eventsController.getEvents
);
router.get(
  '/event/:eventId',
  middlewares.isValidNumberParameter('eventId'),
  middlewares.requestData,
  eventsController.getEventById
);

module.exports = router;
