require('dotenv').config()

const express = require('express');

const verifyEmailRoute = require('./routes/verify');

const port = process.env.PORT || 3000;

const app = express();

app.use(verifyEmailRoute);

app.listen(port);