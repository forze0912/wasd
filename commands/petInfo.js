module.exports = {
    name: 'petInfo',
    description: "gives info about ur pet",
   async execute(message, args, Pet, PetName, Discord, bot) {
        var petProfile = await Pet.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });

        if(!petProfile.Pet) return  messsage.channel.send('You need a pet, pls choose one, dog, cat, air,rock, hamster, hedgehog')  
        

        if(!petProfile.PetName) return message.channel.send('You dont have a name for ur pet, pls name them by typing in !name <ur pet name>')

       var petEmbed = new Discord.MessageEmbed()
       .setTitle('Pet info!')
       .setDescription(`Pet: ${petProfile.Pet} \rPet Name: ${petProfile.PetName}`)

       message.channel.send(petEmbed)
    }
}
