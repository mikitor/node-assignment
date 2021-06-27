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
}

module.exports = SportsService;
