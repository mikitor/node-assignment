const { requestData } = require('./request_data');
const storageService = require('./storage');

class SportsService {
  getSports(language) {
    return requestData(language)
      .then(() => storageService.getSports(language))
      .then((data) => {
        return { success: true, data };
      })
      .catch((error) => {
        return { success: false, error };
      });
  }
}

module.exports = SportsService;
