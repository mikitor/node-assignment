const config = require('dotenv').config();

if (config.error) {
  console.error('Could not load config file');
  throw config.error;
}

const express = require('express');
const sportsRoutes = require('./routes/sports');
const getBestLanguage = require('./middlewares/best_language');

const PORT = process.env.PORT || 3000;

const app = express();

// Global middlewares
app.use(getBestLanguage);

// Routes
app.use('/sports', sportsRoutes);

app.listen(PORT, () => {
  console.log(`Node assignment app listening at http://localhost:${PORT}`);
});
