const express = require('express');
const app = express();
const dotenv = require('dotenv').config({path: './.env.development'});
const personRoute = require('./routes/person');

app.use(personRoute);
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info(`Server has started on port ${port}`);
});
