const { SUPPORTED_LANGUAGES } = require('../helpers/constants');

class StorageService {
  constructor() {
    this.etags = new Map();
    this.sports = new Map();
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
