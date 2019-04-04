const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(100000, 999999);

router.post('/movies/add', (req, res) => {
    const newMovie = {};
    newMovie.uniqId = rand();
    newMovie.title = req.body.sendMovie.title;
    newMovie.year = req.body.sendMovie.year;
    newMovie.format = req.body.sendMovie.format;
    newMovie.stars = req.body.sendMovie.stars;

    const dbMovieObj = new Movie(newMovie);
    dbMovieObj.save()
        .then(items => res.json(items))
        .catch(err => console.log(err));
});

module.exports = router;