module.exports = {
    name: 'bal',
    description: "send bal info",
    async execute(message, args, Discord, bot, Balance, Bank) {
        const mongoose = require('mongoose')
        var mentiondMember = message.mentions.users.first() || message.author;
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        });

        
        if (!mentiondMember) mentiondMember = message.author
        if (!balanceProfile) balanceProfile = await new Balance({
            _id: mongoose.Types.ObjectId(),
            userID: mentiondMember.id,
            guildID: message.guild.id,
            lastedEdited: Date.now(),
        })
        await balanceProfile.save().catch(err => console.log(err));


        var balEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}'s Balance`)
            .setDescription(`Wallet: ${balanceProfile.Balance} \rBank: ${balanceProfile.Bank}`)
            .setTimestamp()

        message.channel.send(balEmbed)
    }
}
