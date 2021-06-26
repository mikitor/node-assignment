const SportsService = require('../service/sports');

const sportsServiceInstance = new SportsService();

const getSports = (req, res) =>
  sportsServiceInstance
    .getSports(req.language)
    .then((successResponse) => res.send(successResponse))
    .catch((errorResponse) => res.status(500).send(errorResponse));

module.exports = {
  getSports,
};
