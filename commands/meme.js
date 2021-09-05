module.exports = {
    name: 'meme',
    description: "sends meme",
    async execute(message, args, fetch, Discord, bot) {
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(async json => {
            const memeEmbed = new Discord.MessageEmbed()
                .setTitle(json.title)
                .setURL(`${json.postLink}`)
                .setImage(json.url)
                .setFooter(`${json.subreddit} ${json.postLink}`)
                .setTimestamp()
                .setColor('RANDOM')

            let msg = await message.channel.send('Getting u a meme...')
                .then(msg => {
                    setTimeout(() => msg.delete(), 20)
                    message.channel.send(memeEmbed)



                })

        })
    }
}