module.exports = {
    name: 'pokemon',
    description: "sends a pic of pokemons",
   async  execute(message, args, Balance, RandoMon) {
        var mentiondMember = message.author;
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        });
        if (balanceProfile.Balance < 10) {
            message.channel.send('you cant do this command, you need at least 10 coins')
        } else {
            let randomImage = RandoMon(); // Generate the image
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance - 10
            });
            message.channel.send(randomImage); // Send the image
            message.channel.send('since i spent countless seconds fetching you these images you gave me 10 coins :)))')
        }
    }
}
