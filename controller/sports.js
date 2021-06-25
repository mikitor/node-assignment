const express = require('express');
const { requestData } = require('../service/request_data');
const { compareNumbers } = require('../helpers/index');

const router = express.Router();
const URL = process.env.API_URL;

router.get('/', async (req, res) => {
  const data = await requestData(URL);
  const sports = data.result.sports
    .sort(compareNumbers('pos'))
    .map(({ id, desc }) => ({ id, desc }));

  res.send({
    success: true,
    data: sports,
  });
});

module.exports = router;
