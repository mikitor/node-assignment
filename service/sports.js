const { requestData } = require('./request_data');
const storageService = require('./storage');

class SportsService {
  getSports(language) {
    try {
      const data = storageService.getSports(language);
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
}

module.exports = SportsService;
