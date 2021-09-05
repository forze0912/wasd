module.exports = {
    name: 'curseBob',
    description: "sends curse bob",
    async execute(message, args, Balance, discordImageGen, Discord) {
        var mentiondMember = message.author;
        var user = message.author
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        });

        const PREFIX = "!";

        if (message.author.bot || message.channel.type === "dm" || !message.content.startsWith(PREFIX)) return;
        if (balanceProfile.Balance === 0) {
            message.channel.send('you cant do this command you need at least 1 coin')
        } else {
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance - 10
            });
            const image = await discordImageGen.cursedspongebob(10);
            const img = new Discord.MessageAttachment(image, "cursedspongebob.png")
            message.channel.send(img)
            message.channel.send('since i spend countless seconds fetching you these images u gave me 10 coins :))')
        }
    }
}