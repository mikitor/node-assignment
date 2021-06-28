const NotFoundError = require('../errors/not_found');

const routeNotFoundErrorHandler = (req, res, next) => {
  const error = new NotFoundError();
  next(error);
};

module.exports = routeNotFoundErrorHandler;
