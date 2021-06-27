const { requestDataService } = require('../service/request_data');

const requestData = async (req, res, next) => {
  const { language } = req;
  await requestDataService(language);
  next();
};


module.exports = {
  requestData,
};
