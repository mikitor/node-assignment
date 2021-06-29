const expect = require('chai').expect;

const storageService = require('../../service/storage');
const saveDataService = require('../../service/save_data');
const EventsService = require('../../service/events');

// Fixtures
const englishResponseJson = require('../fixtures/responses/en-gb.json');
const germanResponseJson = require('../fixtures/responses/de.json');
const chineseResponseJson = require('../fixtures/responses/zh.json');

describe('EventsService', () => {
  const storage = storageService;
  saveDataService(storage)({ language: 'en-gb', data: englishResponseJson });
  saveDataService(storage)({ language: 'de', data: germanResponseJson });
  saveDataService(storage)({ language: 'zh', data: chineseResponseJson });
  const eventsService = new EventsService({ storage });

  describe('.getEvents()', () => {
    it('should return all events', () => {
      const result = eventsService.getEvents('en-gb');

      expect(result[0].comp_id).to.equal(242391910);
      expect(result.length).to.equal(58);
    });

    it('should return all events by sportId', () => {
      const sportId = 100;
      const result = eventsService.getEvents('en-gb', sportId);

      expect(result.length).to.equal(21);
      expect(result[0].desc).to.equal('Croatia v Spain');
      expect(result[0].sport_id).to.equal(sportId);
      expect(result[0].scr).to.equal('3-3');
      expect(result[0].comp_id).to.equal(242391910);
    });

    it('should throw an error if there are no events for an existing sportId', () => {
      const sportId = 101;
      const throwingFunction = () => {
        return eventsService.getEvents('en-gb', sportId);
      };

      expect(throwingFunction).to.throw('Events not found for the provided sportId');
    });
  });

  describe('.getEventById()', () => {
    it('should return event by eventId', () => {
      const eventId = 1500328300;
      const result = eventsService.getEventById('en-gb', eventId);

      expect(result.id).to.equal(eventId);
      expect(result.desc).to.equal('Croatia v Spain');
      expect(result.comp_desc).to.equal('Euro 2020 - Matches');
    });

    it('should throw an error if there is no event for an eventId', () => {
      const eventId = 101;
      const throwingFunction = () => {
        return eventsService.getEventById('zh', eventId);
      };

      expect(throwingFunction).to.throw('Could not find event for the given eventId');
    });
  });
});
