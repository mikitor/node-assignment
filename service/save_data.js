const { compareNumbers } = require('../helpers/functions');

const saveDataService = (storageService) => (data) => {
  if (data) {
    if (
      !storageService.hasEtag(data.language) ||
      !storageService.isIdenticalEtag(data.language, data.etag)
    ) {
      storageService.setEtag(data.language, data.etag);
    }

    const sports = data.data.result.sports;

    const sportsToStore = [];
    const eventsToStore = [];

    sports.sort(compareNumbers('pos')).forEach((sport) => {
      sport.comp.forEach((competition) =>
        competition.events.forEach((event) =>
          eventsToStore.push({ ...event, comp_id: competition.id, comp_desc: competition.desc })
        )
      );
      return sportsToStore.push({ id: sport.id, desc: sport.desc });
    });

    storageService.updateSports(data.language, sportsToStore);
    storageService.updateEvents(data.language, eventsToStore.sort(compareNumbers('pos')));
  }
};

module.exports = saveDataService;
