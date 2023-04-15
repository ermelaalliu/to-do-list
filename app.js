const express = require('express');
const dotenv = require('dotenv').config({path: './.env.development'})
const app = express();

app.get("/", (req, res) => {
    res.send('jello world');
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3])
})

app.get("/api/courses/:id", (req, res) => {
    res.send( req.params.id )
})

const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listenting on port ${port}...`);
} )
