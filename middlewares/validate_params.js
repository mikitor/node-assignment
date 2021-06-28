const BadRequestError = require('../errors/bad_request');

const isValidNumberParameter = (name) => (req, res, next) => {
  if (req.params[name] && !parseInt(req.params[name])) {
    throw new BadRequestError(`Please provide a valid ${name}`);
  } else {
    next();
  }
};

module.exports = isValidNumberParameter;
