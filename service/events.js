const NotFoundError = require('../errors/not_found');
const storageService = require('./storage');

class EventsService {
  getEvents(language, sportId) {
    const events = sportId
      ? storageService.getEventsBySportId(language, sportId)
      : storageService.getAllEvents(language);

    if (sportId && (!events || !events.length)) {
      throw new NotFoundError('Could not find events for the given sportId');
    } else if (!events || !events.length) {
      throw new NotFoundError('Could not find events');
    }

    return events;
  }

  getEventById(language, eventId) {
    const event = storageService.getEventById(language, eventId);

    if (!event) {
      throw new NotFoundError('Could not find event for the given eventId');
    }

    return event;
  }
}

module.exports = EventsService;
