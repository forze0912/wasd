const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            userID: String,
            guildID: String,
            lastedEdited: String,
            Pet: { type: String },
            PetName: { type: String },

            });


        module.exports = new mongoose.model('Pet', petSchema, 'pets');