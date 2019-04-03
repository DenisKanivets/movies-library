const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    release: {
        type: Number,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    }
});

module.exports = Movies = mongoose.model("movies", MovieSchema);