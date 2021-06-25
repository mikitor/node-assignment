const { SUPPORTED_LOCALES, DEFAULT_LANGUAGE } = require('../helpers/constants');

const getBestLanguage = (req, res, next) => {
  const bestLanguage = req.acceptsLanguages(...SUPPORTED_LOCALES);
  const language = bestLanguage ? bestLanguage : DEFAULT_LANGUAGE;

  // Make language accessible on the request object
  req.language = language;
  next();
};

module.exports = getBestLanguage;
