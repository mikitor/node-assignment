const { expect } = require('chai');

const { getScore } = require('../../helpers/functions');

describe('Helpers', () => {
  describe('.getScore()', () => {
    it('should return null if there is no scr or (scrA and scrB) in the scoreboard', () => {
      const scoreboard = {};
      const result = getScore(scoreboard);

      expect(result).to.equal(null);
    });
  });
});
