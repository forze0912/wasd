const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            userID: String,
            guildID: String,
            lastedEdited: String,
            Fud: { type: Number, default: 1 },
            Water: { type: Number, default: 1 }

            });


        module.exports = new mongoose.model('Food', petSchema, 'water');