const BadRequestError = require('../errors/bad_request');
const NotFoundError = require('../errors/not_found');

const globalErrorHandler = (error, req, res, next) => {
  if (!(error instanceof BadRequestError || error instanceof NotFoundError)) {
    console.error(`An unexpected error has occurred: ${error}`);
  }

  const status = error.status || 500;
  res.status(status).json({
    success: false,
    error: {
      status,
      message: error.message,
    },
  });
};

module.exports = globalErrorHandler;
