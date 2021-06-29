const expect = require('chai').expect;

const storageService = require('../../service/storage');
const saveDataService = require('../../service/save_data');

describe('SaveDataService', () => {
  const storage = storageService;

  it('should return undefined if there is no data passed in', () => {
    const result = saveDataService(storage)();

    expect(result).to.equal(undefined);
  });
});
