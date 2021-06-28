const https = require('https');
const storageService = require('../service/storage');
const saveDataService = require('./save_data')(storageService);

const requestDataService = (language) => {
  const options = {
    hostname: process.env.API_HOST,
    path: `/${language}/${process.env.API_PATH}`,
    method: 'GET',
    ...(storageService.hasEtag(language)
      ? {
          headers: {
            'If-None-Match': storageService.getEtag(language),
          },
        }
      : {}),
  };

  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      const { etag } = response.headers;

      if (response.statusCode === 304) {
        resolve();
      }

      // Only resolve with the responseBody, if there is new data received
      if (response.statusCode === 200) {
        let responseBody = '';

        response.on('data', (chunk) => {
          responseBody += chunk;
        });

        response.on('end', () => {
          resolve({ etag, language, data: JSON.parse(responseBody) });
        });
      }
    });

    request.on('error', (error) => {
      reject(error);
    });

    request.end();
  }).then(saveDataService);
};

module.exports = {
  requestDataService,
};
