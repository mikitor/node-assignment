const NotFoundError = require('../errors/not_found');

class EventsService {
  constructor({ storage }) {
    this.storage = storage;
  }

  getEvents(language, sportId) {
    const events = sportId
      ? this.storage.getEventsBySportId(language, sportId)
      : this.storage.getAllEvents(language);

    if (sportId && (!events || !events.length)) {
      throw new NotFoundError('Could not find events for the given sportId');
    } else if (!events || !events.length) {
      throw new NotFoundError('Could not find events');
    }

    return events;
  }

  getEventById(language, eventId) {
    const event = this.storage.getEventById(language, eventId);

    if (!event) {
      throw new NotFoundError('Could not find event for the given eventId');
    }

    return event;
  }
}

module.exports = EventsService;
