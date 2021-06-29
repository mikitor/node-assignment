const expect = require('chai').expect;

const storageService = require('../../service/storage');
const saveDataService = require('../../service/save_data');
const englishResponseJson = require('../fixtures/responses/en-gb.json');

describe('StorageService', () => {
  const etag = 'W/"ace5d3f882c4e7986e7bceb8b1b0df5e"';
  const storage = storageService;
  saveDataService(storage)({
    language: 'en-gb',
    etag,
    data: englishResponseJson,
  });

  describe('.getEtag()', () => {
    it('should return cached ETag', () => {
      const result = storage.getEtag('en-gb');

      expect(result).to.equal('W/"ace5d3f882c4e7986e7bceb8b1b0df5e"');
    });
  });
});
