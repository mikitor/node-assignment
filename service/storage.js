const { SUPPORTED_LANGUAGES } = require('../helpers/constants');
const { extractBasicEventData } = require('../helpers/functions');

class StorageService {
  constructor() {
    this.etags = new Map();
    this.sports = new Map();
    this.events = new Map();
  }

  updateSports(language, sports) {
    this.sports.set(language, sports);
  }

  getSports(language) {
    return this.sports.get(language);
  }

  getSportsAllLanguages() {
    const sportsAllLanguages = [];

    SUPPORTED_LANGUAGES.forEach((language) => {
      if (this.sports.has(language)) {
        this.sports.get(language).forEach((cachedSport) => {
          const existingEntry = sportsAllLanguages.find((sport) => sport.id === cachedSport.id);

          if (existingEntry) {
            existingEntry.desc.push(cachedSport.desc);
          } else {
            sportsAllLanguages.push({ id: cachedSport.id, desc: [cachedSport.desc] });
          }
        });
      }
    });

    return sportsAllLanguages;
  }

  updateEvents(language, events) {
    this.events.set(language, events);
  }

  getAllEvents(language) {
    return this.events.get(language).map(extractBasicEventData);
  }

  getEventsBySportId(language, sportId) {
    return this.events
      .get(language)
      .filter((event) => event.sport_id === Number(sportId))
      .map(extractBasicEventData);
  }

  getEventById(language, eventId) {
    return this.events.get(language).find((event) => event.id === Number(eventId));
  }

  getEtag(language) {
    return this.etags.get(language);
  }

  hasEtag(language) {
    return this.etags.has(language);
  }

  setEtag(language, etag) {
    return this.etags.set(language, etag);
  }

  isIdenticalEtag(language, etag) {
    return this.etags.get(language) === etag;
  }
}

module.exports = new StorageService();
