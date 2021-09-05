module.exports = {
    name: 'deposit',
    description: "deposit cash!",
    async execute(message, args, Balance, Bank) {
        var mentiondMember = message.author;
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        });
        var withdrawNum = Number(args[0])
        if (!withdrawNum) return message.channel.send('you didnt specify a number')
        if (withdrawNum > balanceProfile.Balance) {
            message.channel.send('you dont even have that much in ur wallet')
        } else {
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance - withdrawNum
            });
            await Bank.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Bank: balanceProfile.Bank + withdrawNum
            });
            message.channel.send(`You depoist **${withdrawNum}** into your bank!`)
        }
    }
}
