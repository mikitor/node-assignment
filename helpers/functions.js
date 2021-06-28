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

module.exports = {
  compareNumbers,
  isEmpty,
  getScore,
};
