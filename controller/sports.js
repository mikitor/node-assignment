const SportsService = require('../service/sports');

const sportsServiceInstance = new SportsService();

const getSports = (req, res) => {
  try {
    const successResponse = sportsServiceInstance.getSports(req.language);
    res.send(successResponse);
  } catch (error) {
    res.status(500).send(errorResponse);
  }
};

module.exports = {
  getSports,
};
