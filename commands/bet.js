module.exports = {
    name: 'bet',
    description: "bets money",
    async execute(message, args) {
        var mentiondMember = message.author
        const Balance = require('../balanceSchema');
        var firstValue = Number(args[0]);
        var betCash = Math.floor(Math.random() * firstValue) + firstValue
        var lolYouLostMoney = Math.floor(Math.random() * 7) + 2
        var lolmoney = Math.floor(Math.random() * firstValue) + 1
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        });

        if (!firstValue) return ('lol thats not a number you can do')
        if (firstValue > balanceProfile.Balance) {
            message.channel.send(`You dont even have that much you only have ${balanceProfile.Balance}`)
        } else {
            if (lolYouLostMoney >= 0 && lolYouLostMoney <= 3) {
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance - firstValue + betCash
                });

                message.channel.send(`you bet **${firstValue}** and got **${betCash}** in return!`)
            } else {
                message.channel.send(`lol you lost money, you lost **${lolmoney}**`)
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance - lolmoney
                });

            }
        }
    }
}