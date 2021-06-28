const NotFoundError = require('../errors/not_found');

class SportsService {
  constructor({ storage }) {
    this.storage = storage;
  }

  getSports(language) {
    const sports = this.storage.getSports(language);

    if (!sports) {
      throw new NotFoundError('Could not find sports for the given language');
    }

    return sports;
  }

  getSportsAllLanguages() {
    const sportsAllLanguages = this.storage.getSportsAllLanguages();

    if (!sportsAllLanguages || !sportsAllLanguages.length) {
      throw new NotFoundError('Could not find sports in any of the supported languages');
    }

    return sportsAllLanguages;
  }
}

module.exports = SportsService;
