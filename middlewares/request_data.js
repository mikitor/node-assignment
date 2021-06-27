const { SUPPORTED_LANGUAGES } = require('../helpers/constants');
const { requestDataService } = require('../service/request_data');

const requestData = async (req, res, next) => {
  const { language } = req;
  await requestDataService(language);
  next();
};

const requestDataAllLanguages = async (req, res, next) => {
  await Promise.all(SUPPORTED_LANGUAGES.map((language) => requestDataService(language)));
  next();
};

module.exports = {
  requestData,
  requestDataAllLanguages,
};
