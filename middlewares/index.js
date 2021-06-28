const bestLanguage = require('./best_language');
const isValidNumberParameter = require('./validate_params');
const { requestData, requestDataAllLanguages } = require('./request_data');

const globalErrorHandler = require('./global_error_handler');
const routeNotFoundErrorHandler = require('./route_not_found_error_handler');

module.exports = {
  bestLanguage,
  isValidNumberParameter,
  requestData,
  requestDataAllLanguages,
  globalErrorHandler,
  routeNotFoundErrorHandler,
};
