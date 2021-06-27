const SportsService = require('../service/sports');

const sportsServiceInstance = new SportsService();

const getSports = (req, res) => {
  const sports = sportsServiceInstance.getSports(req.language);
  res.status(200).json({ success: true, data: sports });
};

module.exports = {
  getSports,
};
