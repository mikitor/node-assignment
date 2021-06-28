const compareNumbers = (key) => (a, b) => a[key] - b[key];

const isEmpty = (value) => value === null || value === undefined || value.length === 0;

const getScore = (scoreboard) => {
  if (scoreboard.scr) {
    return scoreboard.scr;
  } else if (!isEmpty(scoreboard.scrA) && !isEmpty(scoreboard.scrB)) {
    return `${scoreboard.scrA}-${scoreboard.scrB}`;
  } else {
    return null;
  }
};

const extractBasicEventData = (event) => ({
  id: event.id,
  desc: event.desc,
  sport_id: event.sport_id,
  comp_id: event.comp_id,
  comp_desc: event.comp_desc,
  event_type: event.event_type,
  event_path_id: event.event_path_id,
  oppADesc: event.oppADesc,
  oppAId: event.oppAId,
  oppBDesc: event.oppBDesc,
  oppBId: event.oppBId,
  american: event.american,
  inPlay: event.inPlay,
  time: event.time,
  scr: getScore(event.scoreboard),
});

module.exports = {
  compareNumbers,
  isEmpty,
  getScore,
  extractBasicEventData,
};
