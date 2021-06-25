const https = require('https');

const requestData = (URL) => {
  return new Promise((resolve, reject) => {
    const request = https.get(URL, (response) => {
      let responseBody = '';

      response.on('data', (chunk) => {
        responseBody += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(responseBody));
      });
    });

    request.on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = {
  requestData,
};
