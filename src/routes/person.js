const express = require('express');
const router = express.Router();

// QueryString => query property on the request object
router.get("/person", (req, res) => {
    res.send("you have requested a person");
});

// Params property on the request object
router.get("/person/:name", (req, res) => {
    res.send(`you have requested a person ${req.params.name}`);
});




module.exports = router;
