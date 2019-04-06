const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');

router.post("/movies/delete/:id", (req, res) => {
    Movie.deleteOne({_id: req.params.id})
        .then(items => res.json(items))
        .catch(err => console.log(err));
});

module.exports = router;