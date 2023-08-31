const express = require('express');
const kickbox = require('kickbox').client(process.env.KICKBOX_API_KEY).kickbox();

const router = express.Router();

router.get('/verify-email/:email', (req, res, next) => {
    const email = req.params.email;

    kickbox.verify(email, (err, response) => {
        if (err) {
            console.log('error!', err);
            res.status(500).send('Something went wrong!');
        }
        console.log(response.body);
        res.status(200).send(response.body);
    });
});

module.exports = router;