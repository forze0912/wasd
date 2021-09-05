const mongoose = require('mongoose');

const invSchema = new mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            userID: String,
            guildID: String,
            lastedEdited: String,
            Fud: { type: Number, default: 0 },
            Water: { type: Number, default: 0 },

            });


        module.exports = new mongoose.model('Inventory', invSchema, 'Inventories');