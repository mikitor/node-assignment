class SportsController {
  constructor({ sportsService }) {
    this.sportsService = sportsService;
  }

  getSports = (req, res) => {
    const sports = this.sportsService.getSports(req.language);
    res.status(200).json({ success: true, data: sports });
  };

  getSportsAllLanguages = (req, res) => {
    const sportsAllLanguages = this.sportsService.getSportsAllLanguages();
    res.status(200).json({ success: true, data: sportsAllLanguages });
  };
}

module.exports = SportsController;
