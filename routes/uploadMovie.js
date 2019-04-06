const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(100000, 999999);

router.post('/movies/upload', (req, res) => {
    for (let i = 0; i < req.body.length; i++) {
        const newMovie = {};
        newMovie.uniqId = rand();
        newMovie.title = req.body[i].title;
        newMovie.year = req.body[i].year;
        newMovie.format = req.body[i].format;
        newMovie.stars = req.body[i].stars;

        const dbMovieObj = new Movie(newMovie);
        dbMovieObj.save()
            .then(items => res.json(items))
            .catch(err => console.log(err));
    }
});

module.exports = router;