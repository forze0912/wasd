module.exports = {
    name: 'help',
    description: "helps u ",
    execute(message, Discord, bot) {
        var helperEmbed = new Discord.MessageEmbed()
        .setTitle('Helper Embed!')
        .setDescription('#rng <ur number> to get a random number! \r #8ball <question> = ask a question \r #pfp to see ur pfp \r #user to see ur user \r #userpfp <member> to see their pfp \r #meme to see a random meme \r #bot to see info about me! :> \r #rps to play a simple game if rock paper scissors! \r #play to play music \r #stop to stop music \r #pet to get a pet \r #petInfo to see info about ur pet \r #search to search for coins \r #work to work \r #cal to calculate number \r #snek for a snake game \r #bored to help cure ur boredness ')
        .setColor('RANDOM')
        .setTimestamp()
    message.channel.send(helperEmbed)
    }
}
