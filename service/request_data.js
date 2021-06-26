const https = require('https');
const storageService = require('./storage');

const { compareNumbers } = require('../helpers/functions');

const requestData = (language) => {
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

      if (!storageService.hasEtag(language) || !storageService.isIdenticalEtag(language, etag)) {
        storageService.setEtag(language, etag);
      }

      if (response.statusCode !== 304) {
        let responseBody = '';

        response.on('data', (chunk) => {
          responseBody += chunk;
        });

        response.on('end', () => {
          resolve({ shouldCache: true, etag, language, data: JSON.parse(responseBody) });
        });
      } else {
        resolve({ shouldCache: false });
      }
    });

    request.on('error', (error) => {
      reject(error);
    });

    request.end();
  }).then((data) => {
    if (data.shouldCache) {
      const sports = data.data.result.sports;
      const sportsToStore = sports
        .sort(compareNumbers('pos'))
        .map(({ id, desc }) => ({ id, desc }));

      storageService.updateSports(data.language, sportsToStore);
    }
  });
};

module.exports = {
  requestData,
};
