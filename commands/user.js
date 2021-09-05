module.exports = {
    name: 'user',
    description: "gets info about u",
    execute(message, args, Discord, bot) {
        const embed = new Discord.MessageEmbed()
            .addField('Player Name', message.author.username)
            .addField('server name', message.guild.name)
            .addField('Ur id', message.author.id)
            .setTimestamp()
            .setColor(0x17E85E)
            .setThumbnail(message.author.avatarURL())
        message.channel.send(embed);
    }
}