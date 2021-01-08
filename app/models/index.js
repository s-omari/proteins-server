const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    url : "mongodb://localhost:27017/bioreader_db",
    proteins: require("./protein.model.js")
};

module.exports = db;