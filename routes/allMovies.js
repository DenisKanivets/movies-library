const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');

router.get("/movies", (req, res) => {
    Movie.find()
        .then(items => res.json(items))
        .catch(err => console.log(err));
});

module.exports = router;