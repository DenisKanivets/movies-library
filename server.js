const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/keys").mongoURI;
const app = express();

const addMovie = require("./routes/addMovie");
const uploadMovie = require("./routes/uploadMovie");
const deleteMovie = require("./routes/deleteMovie");
const allMovies = require("./routes/allMovies");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/", addMovie);
app.use("/", uploadMovie);
app.use("/", deleteMovie);
app.use("/", allMovies);

const port = process.env.PORT || 9000;
let server = app.listen(port, () =>
    console.log(`We are living on port ${port}`)
);
module.exports = server;