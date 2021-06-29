const expect = require('chai').expect;

const NotFoundError = require('../../errors/not_found');

describe('Errors', () => {
  describe('404', () => {
    it('should say "Not Found" by default in the error message', () => {
      const throwingFunction = () => {
        throw new NotFoundError();
      };

      expect(throwingFunction).to.throw('Not Found');
    });
  });
});
