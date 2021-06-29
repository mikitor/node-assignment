const config = require('dotenv').config();

if (config.error) {
  console.error('Could not load config file');
  throw config.error;
}

const express = require('express');
const getBestLanguage = require('./middlewares/best_language');
const { globalErrorHandler, routeNotFoundErrorHandler } = require('./middlewares/index');
const routeHandler = require('./routes/routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Global middlewares
app.use(getBestLanguage);

// Routes
app.use('/', routeHandler);

// Error handlers
app.use(routeNotFoundErrorHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Node assignment app listening at http://localhost:${PORT}`);
});

process.on('unhandledRejection', (error, promise) => {
  console.error('An unhandled promise rejection happened: ', promise);
  console.error('The unhandled promise rejection error: ', error);
});
