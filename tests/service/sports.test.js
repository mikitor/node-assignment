const expect = require('chai').expect;

const storageService = require('../../service/storage');
const saveDataService = require('../../service/save_data');
const SportsService = require('../../service/sports');

const englishResponseJson = require('../fixtures/responses/en-gb.json');
const germanResponseJson = require('../fixtures/responses/de.json');
const chineseResponseJson = require('../fixtures/responses/zh.json');

describe('SportsService', () => {
  const storage = storageService;
  saveDataService(storage)({ language: 'en-gb', data: englishResponseJson });
  saveDataService(storage)({ language: 'de', data: germanResponseJson });
  saveDataService(storage)({ language: 'zh', data: chineseResponseJson });
  const sportsService = new SportsService({ storage });

  describe('.getSports()', () => {
    it('should return all sports in one language', () => {
      const result = sportsService.getSports('en-gb');

      expect(result[3].id).to.equal(650);
      expect(result[3].desc).to.equal('Table Tennis');
      expect(result.length).to.equal(6);
    });
  });

  describe('.getSportsAllLanguages()', () => {
    it('should return all sports in all languages', () => {
      const result = sportsService.getSportsAllLanguages();

      expect(result.length).to.equal(6);
      expect(result[1].id).to.equal(600);
      expect(result[1].desc).to.eql(['Tennis', 'Tennis', '网球']);
    });

    it('should return an empty array if there is no data for a given language', () => {
      storage.updateSports('zh', []);
      storage.updateSports('en-gb', []);
      storage.updateSports('de', []);
      const result = sportsService.getSportsAllLanguages();

      expect(result).to.eql([]);
    });
  });
});
