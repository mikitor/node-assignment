const express = require('express');
const middlewares = require('../middlewares/index');
const storageService = require('../service/storage');
const EventsService = require('../service/events');
const eventsService = new EventsService({ storage: storageService });
const EventsController = require('../controller/events');
const eventsController = new EventsController({ eventsService });
const SportsService = require('../service/sports');
const sportsService = new SportsService({ storage: storageService });
const SportsController = require('../controller/sports');
const sportsController = new SportsController({ sportsService });

const router = express.Router();

// Sports routes
router.get('/sports', middlewares.requestData, sportsController.getSports);
router.get(
  '/sports/all',
  middlewares.requestDataAllLanguages,
  sportsController.getSportsAllLanguages
);

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
