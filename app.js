const config = require('dotenv').config();

if (config.error) {
  console.error('Could not load config file');
  throw config.error;
}

const express = require('express');
const getBestLanguage = require('./middlewares/best_language');
const globalErrorHandler = require('./middlewares/global_error_handler');
const routeNotFoundErrorHandler = require('./middlewares/route_not_found_error_handler');
const routeHandler = require('./routes/routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Global middlewares
app.use(getBestLanguage);

// Routes
app.use('/', routeHandler);

app.use(routeNotFoundErrorHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Node assignment app listening at http://localhost:${PORT}`);
});
