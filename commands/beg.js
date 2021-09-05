module.exports = {
    name: 'beg',
    description: "beg for cash!",
    async execute(message, args, Balance) {
        var balanceProfile = await Balance.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });
    
        var kindPersons = [
            "John Cena",
            "The Rock",
            "Joe Biden",
            "The kid down the street",
            "ur dad",
            "ur mom",
            "Jeff",
            "Elon Musk",
        ]
        var kindPerson = kindPersons[Math.floor(Math.random() * (kindPersons.length))]
        var beggerLuck = Math.floor(Math.random() * 149) + 1;
        await Balance.findOneAndUpdate({
            userID: message.author.id,
            guildID: message.guild.id
        }, {
            Balance: balanceProfile.Balance + beggerLuck
        });
        message.reply(`a kind donation from **${kindPerson}** he gave you **${beggerLuck}** coins!`)
    }
}
