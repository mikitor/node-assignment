const { requestData } = require('./request_data');
const { compareNumbers } = require('../helpers/functions');

const getApiUrl = (language) => `${process.env.API_HOST}/${language}/${process.env.API_PATH}`;

class SportsService {
  getSports(language) {
    return requestData(getApiUrl(language))
      .then((data) => {
        const sports = data.result.sports
          .sort(compareNumbers('pos'))
          .map(({ id, desc }) => ({ id, desc }));

        return { success: true, data: sports };
      })
      .catch((error) => {
        return { success: false, error };
      });
  }
}

module.exports = SportsService;
