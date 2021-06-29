class StorageService {
  constructor() {
    this.etags = new Map();
    this.sports = new Map();
    this.events = new Map();
  }

  updateSports(language, sports) {
    return this.sports.set(language, sports);
  }

  getSports(language) {
    return this.sports.get(language);
  }

  updateEvents(language, events) {
    return this.events.set(language, events);
  }

  getEvents(language) {
    return this.events.get(language);
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
