const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            userID: String,
            guildID: String,
            lastedEdited: String,
            Balance: { type: Number, default: 0 },
            Bank: { type: Number, default: 0 }

            });


        module.exports = new mongoose.model('Balance', balanceSchema, 'balances');