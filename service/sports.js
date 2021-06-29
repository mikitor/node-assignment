const { SUPPORTED_LANGUAGES } = require('../helpers/constants');

class SportsService {
  constructor({ storage }) {
    this.storage = storage;
  }

  getSports(language) {
    return this.storage.getSports(language);
  }

  getSportsAllLanguages() {
    const sportsAllLanguages = [];

    SUPPORTED_LANGUAGES.forEach((language) => {
      const sports = this.storage.getSports(language);
      if (sports && sports.length) {
        sports.forEach((cachedSport) => {
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
}

module.exports = SportsService;
