const config = require('dotenv').config();

if (config.error) {
  console.error('Could not load config file');
  throw config.error;
}

const express = require('express');
const sports = require('./controller/sports');
const PORT = process.env.PORT || 3000;

const app = express();

// Route handlers
app.use('/sports', sports);

app.listen(PORT, () => {
  console.log(`Node assignment app listening at http://localhost:${PORT}`);
});
