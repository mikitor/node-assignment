# Node Assignment

## Setup

In order to keep the identity of the company and the task details secret, these are saved in a .env file. To be able to run the server, please change the name of the `sampledotenv` file to `.env`, and please provide the correct `API_HOST` and `API_PATH`.

After that, please run in the downloaded folder:
```
npm i
npm start
```

To get the test coverage:
```
npm run test-coverage
```

To run the test suite:
```
npm run test
```

To run the test suite in watch mode:
```
npm run test-watch
```

## Available routes

By default, the response is in English; however, if the request contains the `Accept-Language` header, English, German, and Chinese are supported languages.

### Sports routes

#### GET /sports

Lists all sports
```
curl http://localhost:3000/sports
```

#### GET /sports/all

Lists all sports in all languages
```
curl http://localhost:3000/sports/all
```

### Events routes

#### GET /events/:sportId?

Lists all events (per sportId) - where sportId is an optional parameter
```
curl http://localhost:3000/events
curl http://localhost:3000/events/100
```

#### GET /event/:eventId
Lists all data for a given event
```
curl http://localhost:3000/event/1503784200
```
