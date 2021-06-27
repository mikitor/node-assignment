const globalErrorHandler = (error, req, res, next) => {
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
