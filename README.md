# Reflective

Reflective is a simple, yet powerful, journaling app. Here's how it works:

1. :phone: "How's your day going?" - every day, you'll receive a phone call from the app. You'll have 60 seconds to say whatever you'd like.

2. :notebook_with_decorative_cover: Reflective will store a recording of your call on the server and convert it into text. The next time you log into the web app, you'll be able to see (and listen to!) your past journal entries.

3. :crystal_ball: With the *insights* feature, Reflective will run analysis on your entries to glean insights into their sentiment, emotion, and keywords. It will then generate custom charts which illustrate how your mood changes over time, and how topics/keywords mentioned in your entries relate to your emotional state.

## Table of Contents

1. [Overview](#overview)
    1. [Features](#features)
        1.[Calling](#calling)
        2.[Journal](#journal)
        3.[Insights](#insights)
    1. [Team](#team)
    1. [Tech Stack](#tech-stack)
        1.[Front-End](#front-end)
        1.[Back-End](#back-end)
        1.[Development Tools](#development-tools)
1. [Usage](#usage)
1. [Requirements](#requirements)
    1. [Technologies](#technologies)
    1. [APIs](#apis)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Testing](#testing)
    1. [Tasks](#tasks)
1. [Contributing](#contributing)

## Overview

### Features

#### Calling

[Insert screenshots here]

TBD - Discuss scheduled calling feature and call me now.

#### Journal

[Insert screenshots here]

TBD - Discuss entries view, including timeline and search.

#### Insights

[Insert screenshots here]

TBD - Discuss insights feature.

### Team :busts_in_silhouette:

  - [Jason Chang](https://github.com/j-chang)
  - [Scott Clendening](https://github.com/smclendening)
  - [Terence Mac](https://github.com/terencetmac)
  - [Tyler Arbus](https://github.com/tylerarbus)

### Tech Stack :computer:

#### Front-End

1. React
2. Redux
3. React Router
4. D3

#### Back-End

1. Node
2. Express
3. PostgreSQL
4. Kue
5. JWT & Bcrypt
6. Cron
7. Elasticsearch

#### Development Tools

1. Webpack
2. React Hot Reloader
3. Jest
4. Enzyme
5. Supertest
6. ESLint

## Usage :runner:

Before running the application, you'll need to configure the following environment variables (these should be saved in a .env file in the root directry):

```sh
JWT_SECRET= [TBD]
TWILIO_SID= [TBD]
TWILIO_AUTH_TOKEN= [TBD]
AUTHY_KEY= [TBD]
TWILIO_FROM= [TBD]
TWILIO_XML_URL= [TBD]
DATABASE_URL= [URL of PostgreSQL database]
IS_ON= [TBD]
SPEECH_USERNAME= [Watson Speech to Text Username]
SPEECH_PASSWORD= [Watson Speech to Text Password]
SENTIMENT_USERNAME= [Watson Natural Language Understanding Username]
SENTIMENT_PASSWORD= [Watson Natural Language Understanding Password]
REDIS_URL= [URL of Redis database]
SEARCH_URL= [URL of elasticsearch cluster]
```

Then, run the following script from within the root directory:

```sh
npm run dev
```

## Requirements :package:

### Technologies :o:

- Node 6.4.x
- Redis 2.6.x
- Postgresql 9.1.x
- Elasticsearch 5.3.x

You may use a local or hosted database/search service for Redis, Postgresql, and Elasticsearch.

### APIs :earth_americas:

Reflective uses third-party services to power its calling and analytics features. To use the application, you'll need to generate API keys for the following services:

- [Twillio Calling API](https://www.twilio.com/)
- [Watson - Speech to Text Service](https://www.ibm.com/watson/developercloud/speech-to-text.html)
- [Watson - Natural Language Understanding](https://www.ibm.com/watson/developercloud/natural-language-understanding.html)

## Development :rocket:

### Installing Dependencies :floppy_disk:

From within the root directory:

```sh
npm install
```

### Testing :heavy_check_mark:

Our test suite uses **Jest, Enzyme** (for testing React components), and **Supertest** (for mock HTTP requests). To run all tests:

```sh
npm run test:dev
```

Refer to [TESTING.md](TESTING.md) for testing guidelines.

## Contributing :thought_balloon:

We keep track of features, bugs, ui fixes, and other tickets using **Github Issues**. Check out [this page](https://github.com/ConvivialChameleons/Reflective/issues) for a list of open issues. Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

Our application was written in ES6 (ECMAScript 2015) syntax and follows the [Airbnb Style Guide](https://github.com/airbnb/javascript).

