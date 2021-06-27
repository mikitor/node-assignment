class BadRequestError extends Error {
  constructor(message) {
    super(message || 'Bad Request');
    this.status = 400;
    this.name = 'BadRequest';
  }
}

module.exports = BadRequestError;
