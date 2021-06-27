const storageService = require('./storage');
const NotFoundError = require('../errors/not_found');

class SportsService {
  getSports(language) {
    const sports = storageService.getSports(language);
    if (!sports) {
      throw new NotFoundError('Could not find sports for the given language');
    } else {
      return sports;
    }
  }

  getSportsAllLanguages() {
    const sportsAllLanguages = storageService.getSportsAllLanguages();
    if (!sportsAllLanguages || !sportsAllLanguages.length) {
      throw new NotFoundError('Could not find sports in any of the supported languages');
    }
    return sportsAllLanguages;
  }
}

module.exports = SportsService;
