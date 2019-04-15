const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/keys").mongoURI;
const app = express();

require("dotenv").config();

const addMovie = require("./routes/addMovie");
const uploadMovie = require("./routes/uploadMovie");
const deleteMovie = require("./routes/deleteMovie");
const allMovies = require("./routes/allMovies");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose
    .connect(process.env.MONGODB_URI || db)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/", addMovie);
app.use("/", uploadMovie);
app.use("/", deleteMovie);
app.use("/", allMovies);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 9000;
let server = app.listen(port, () =>
    console.log(`We are living on port ${port}`)
);
module.exports = server;