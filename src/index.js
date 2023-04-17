const express = require('express');
const app = express();
const dotenv = require('dotenv').config({path: './.env.development'});
const personRoute = require('./routes/person');
const path = require('path');

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next();
})

app.use(personRoute);
app.use(express.static('public'));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send("We think you are lost!");
});

// Handler for error 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    // serve the 500.html file instead of some text message
    // use the send method that express provides
    // __dirname -> from where the project is running from
    res.sendFile(path.join( __dirname, '../public/500.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`Server has started on port ${port}`);
});
