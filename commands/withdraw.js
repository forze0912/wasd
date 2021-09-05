module.exports = {
    name: 'withdraw',
    description: "withdraw cash",
    async execute(message, args, Balance, Bank) {
        var mentiondMember = message.author;
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        })
        var DepNum = Number(args[0])
        if (!DepNum) return message.channel.send('you didnt specify a number')
        if (DepNum > balanceProfile.Bank) {
            message.channel.send('you dont even have that much in ur bank')
        } else {
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance + DepNum
            });
            await Bank.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Bank: balanceProfile.Bank - DepNum
            });
            message.channel.send(`You withdraw **${DepNum}** into your wallet!`)
        }
    }
}
