const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const dbConfig = require('../config/db.config')
const db = {
    mongoose: mongoose,
    url : `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    proteins: require("./protein.model.js"),
    roles: require("./role.model.js"),
    users: require("./user.model.js"),
};

db.ROLES = ["user", "admin", "moderator"];


module.exports = db;