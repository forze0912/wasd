module.exports = {
    name: 'petInfo',
    description: "gives info about ur pet",
   async execute(message, args, Pet, PetName, Discord, bot) {
        var petProfile = await Pet.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });
        if(!petProfile) {
            if (!petProfile) petProfile = await new Pet({
                _id: mongoose.Types.ObjectId(),
                userID: message.author.id,
                guildID: message.guild.id,
                lastedEdited: Date.now(),
            })
            await petProfile.save().catch(err => console.log(err));
            message.channel.send(`You dont have a pet pls choose one`)
            return;
        }

        if(!petProfile.Pet) return  message.channel.send('You need a pet, pls choose one, dog, cat, air,rock, hamster, hedgehog')  
        

        if(!petProfile.PetName) return message.channel.send('You dont have a name for ur pet, pls name them by typing in !name <ur pet name>')

       var petEmbed = new Discord.MessageEmbed()
       .setTitle('Pet info!')
       .setDescription(`Pet: ${petProfile.Pet} \rPet Name: ${petProfile.PetName}`)

       message.channel.send(petEmbed)
    }
}
