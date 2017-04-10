const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const requestHandler = require('./requestHandler.js');
const callingHandler = require('./calling/callingHandler.js');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/api/calling', callingHandler);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

module.exports = server;
