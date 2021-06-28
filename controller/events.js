const EventsService = require('../service/events');

const eventsServiceInstance = new EventsService();

const getEvents = (req, res) => {
  const events = eventsServiceInstance.getEvents(req.language, req.params.sportId);

  res.status(200).json({ success: true, data: events });
};

const getEventById = (req, res) => {
  const event = eventsServiceInstance.getEventById(req.language, req.params.eventId);

  res.status(200).json({ success: true, data: event });
};

module.exports = {
  getEvents,
  getEventById,
};
