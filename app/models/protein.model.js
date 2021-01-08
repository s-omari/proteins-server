const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const proteinSchema = new Schema({
        name: { type: String },
        pdbId: { type: String }
    },
    {
        timestamps: true
    });
const Protein = mongoose.model('protein' , proteinSchema );

module.exports = Protein;