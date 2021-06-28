const { SUPPORTED_LANGUAGES } = require('../helpers/constants');
const { requestDataService } = require('../service/request_data');

const requestData = (req, res, next) =>
  requestDataService(req.language)
    .then(() => next())
    .catch((error) => next(error));

const requestDataAllLanguages = (req, res, next) =>
  Promise.all(SUPPORTED_LANGUAGES.map((language) => requestDataService(language)))
    .then(() => next())
    .catch((error) => next(error));

module.exports = {
  requestData,
  requestDataAllLanguages,
};
