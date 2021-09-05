const Discord = require('discord.js')

const bot = new Discord.Client()

const PREFIX = "!";

bot.on('ready', () => {
    console.log('READY!!!')

})

bot.on('message', async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if(command === 'message') {
        bot.users.cache.get('752612067265216526').send(message.content);
    }

})

bot.login('ODU2MzQ0ODQxODAxMTcwOTc0.YM_rSA.8024b3OQUk77U124zf-MzcxEOyw')