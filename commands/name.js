module.exports = {
    name: 'name',
    description: "gives ur pet a name",
    async execute(message, args, PetName) {
        var petProfile = await PetName.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });
        var dud = args[0]
        if(!petProfile.Pet) return message.channel.send('You dont have a pet')
        if(!dud) return message.channel.send('U didnt give ur pet a name')
        message.channel.send(`You named ur pet ${dud}`)
            await PetName.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                PetName: petProfile.PetName = dud
            });
    }
}
