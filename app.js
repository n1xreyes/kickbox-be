require('dotenv').config()

const express = require('express');
const cors = require('cors');

const verifyEmailRoute = require('./routes/verify');

const port = process.env.PORT || 3000;

const app = express();

// Set up CORS
app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));

app.use(verifyEmailRoute);

app.listen(port);