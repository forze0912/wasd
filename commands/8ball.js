module.exports = {
    name: '8ball',
    description: "tells u answers",
    execute(message, args) {
        const Discord = require('discord.js')

        const bot = new Discord.Client()
        const answers = [
            "yes",
            "no",
            "maybe",
            "idk",
            "my senses say no",
            "ofc",
            "you know the answer",
            "not in a million years",
            "what kind of question is that, ofc",
            "definently",
            ":regional_indicator_y: :regional_indicator_e: :regional_indicator_s: :grey_exclamation: ",
            "nah",
            "not at all",
            "nope",
        ]

        var answer = answers[Math.floor(Math.random() * (answers.length))]
        if (message.content === '!8ball hi') {
            message.channel.send('hai')
        } else {
            var AnswerEmbed = new Discord.MessageEmbed()
                .setTitle('8ball!')
                .setDescription('Ur question ' + message.content + '\r my answer ' + answer)
                .setTimestamp()
                .setColor('RANDOM')

            message.channel.send(AnswerEmbed)

        }
    }
}