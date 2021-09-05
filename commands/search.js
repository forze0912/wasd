module.exports = {
    name: 'search',
    description: "search for cash",
    async  execute(message, args, mongoose) {
        const Balance = require('../balanceSchema');
        var balanceProfile = await Balance.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });

        if (!balanceProfile) balanceProfile = await new Balance({
            _id: mongoose.Types.ObjectId(),
            userID: mentiondMember.id,
            guildID: message.guild.id,
            lastedEdited: Date.now(),
        })
    

        var places = [
            "plane",
            "ur couch",
            "ur bed",
            "ur car",
            "the kid down the street",
            "the grandma walking on the sidewalk",
        ]
        var youFound = Math.floor(Math.random() * balanceProfile.Balance) + 1
        var search = places[Math.floor(Math.random() * (places.length))]
        if (search === "the grandma walking on the sidewalk") {
            message.channel.send(`You searched the the grandma walking on the sidewalk, you thought it was free coins but instead it was a THUG and he stole ${youFound} coins from you`)
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance - youFound
            });
        } else {
            message.channel.send(`You search **${search}** and found **${youFound}** coins!`)
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance + youFound
            });

        }
    }
}