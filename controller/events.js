class EventsController {
  constructor({ eventsService }) {
    this.eventsService = eventsService;
  }

  getEvents = (req, res) => {
    const events = this.eventsService.getEvents(req.language, req.params.sportId);
    res.status(200).json({ success: true, data: events });
  };

  getEventById = (req, res) => {
    const event = this.eventsService.getEventById(req.language, req.params.eventId);
    res.status(200).json({ success: true, data: event });
  };
}

module.exports = EventsController;
