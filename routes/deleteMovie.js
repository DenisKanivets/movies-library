const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');

router.delete("/movies/delete/:id", (req, res) => {
    Movie.deleteOne({'product': req.params._id})
        .then(items => res.json(items))
        .catch(err => console.log(err));

});

module.exports = router;