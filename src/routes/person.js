const express = require('express');
const router = express.Router();

// QueryString => query property on the request object
// localhost:3000/person?name=thomas&age=20
router.get("/person", (req, res) => {

    if(req.query.name) {
        res.send(`you have requested a person ${req.query.name}`)
    }
    else{
        res.send("you have requested a person");
    }
});

// Params property on the request object
// localhost: 3000/person/thomas
router.get("/person/:name", (req, res) => {
    res.send(`you have requested a person ${req.params.name}`);
});




module.exports = router;
