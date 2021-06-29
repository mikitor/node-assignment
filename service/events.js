const NotFoundError = require('../errors/not_found');
const { extractBasicEventData } = require('../helpers/functions');

class EventsService {
  constructor({ storage }) {
    this.storage = storage;
  }

  getEvents(language, sportId) {
    if (
      sportId &&
      !this.storage.getSports(language).find((sport) => sport.id === Number(sportId))
    ) {
      throw new NotFoundError('Events not found for the provided sportId');
    }

    const allEvents = this.storage.getEvents(language);

    return sportId
      ? allEvents.filter((event) => event.sport_id === Number(sportId)).map(extractBasicEventData)
      : allEvents.map(extractBasicEventData);
  }

  getEventById(language, eventId) {
    const event = this.storage.getEvents(language).find((event) => event.id === Number(eventId));

    if (!event) {
      throw new NotFoundError('Could not find event for the given eventId');
    }

    return event;
  }
}

module.exports = EventsService;
