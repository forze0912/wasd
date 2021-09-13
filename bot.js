const Discord = require('discord.js')

const bot = new Discord.Client()

const Levels = require('discord-xp');

const Balance = require('./balanceSchema');

const Bank = require('./balanceSchema');

const mongoose = require('mongoose');

const discordImageGen = require("image-generation-for-discord");

const { hangman } = require('reconlx')

const RandoMon = require('randomon');

const Pet = require('./petSchema')

const PetName = require('./petSchema')

const talkedRecently = new Set();

const searchRecently = new Set();

const workRecently = new Set();

const modmail = require('modmail.js') 

modmail.on({ 
  token: 'ODU2MzQ0ODQxODAxMTcwOTc0.YM_rSA.8024b3OQUk77U124zf-MzcxEOyw', 
  inbox: '858504999096549429', 
  prefix: '#', 
  message: 'New ModMail!', 
  inline: true, // inlineReply
  
  })

  .then(r=>{
    console.log(r)
    }).catch(err => {
    console.log(err)
    })


const fs = require('fs')
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}



Levels.setURL(`mongodb+srv://forzefn:lolking0912@discordbot.temsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const PREFIX = '#';

function catchErr(err, message) {

}

bot.on('ready', () => {
    console.log(`im working :)))`)
    bot.user.setActivity('currently suffering from depresion', {
        type: "STREAMING"
    })
    bot.user.setStatus('dnd')
    bot.user.setActivity('#help, prefix changed to #, made by 静かな子供（forze)#0578 :))) ')

})



bot.on('message', message => {

    if (message.content === 'im hungry') {

        const guild = message.guild;

        const member = guild.member(message.author);

        message.reply(':cookie: heres a cookie')

    }

})

bot.on('ready', () => {

})

bot.on('message', message => {

    if (message.content === 'hi') {
        message.reply('hello how are you doing.')

    }

})

bot.on('ready', () => {

})



bot.on('message', message => {

    if (message.content === 'im doing great') {
        message.reply('thats nice to hear.')

    }

})

bot.on('ready', () => {

})



bot.on('message', message => {

    if (message.content === 'hello') {
      message.reply('hello how are you doing :))).')

    }

})

bot.on('ready', () => {

});

bot.on('message', message => {
    if (message.content === 'poggers') {
        message.channel.send('pogg');
    }
});

bot.on('ready', () => {

});

bot.on('message', message => {
    if (message.content === 'pog') {
        message.channel.send('pogchamp');
    }
});

bot.on('ready', () => {

})



bot.on('message', message => {

    if(message.author.bot) {
        return;
    } else {

    if (message.content === 'e') {    
        message.channel.send('e');
    }
  }

})

bot.on('ready', () => {

})



bot.on('message', message => {

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'user':
            bot.commands.get('user').execute(message, args, Discord, bot)

    }

})

bot.on('message', message => {

    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'smile':
            message.channel.send('https://cdn.discordapp.com/attachments/857046648751390772/860720651676155914/unnamed-1.jpeg')
    }

})

bot.on('ready', () => {

})

bot.on('message', message => {
    let wasd = message.content.substring(PREFIX.length).split(" ");
    const command = wasd.shift();
    if (command === 'rng') {
        bot.commands.get('rng').execute(message, wasd)
    }
})




const botconfig = require("./botconfig.json");
disableEveryone: true

bot.on('ready', () => {


})

bot.on('message', message => {

    try {

        let args = message.content.substring(PREFIX.length).split(" ");


        switch (args[0]) {
            case 'userpfp':
                const guild = message.guild;
                var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                const userpfp = new Discord.MessageEmbed()
                    .setTitle(`this person's pfp`)
                    .setColor(0x0000FF)
                    .setTimestamp()
                    .setImage(member.user.avatarURL())

                message.channel.send(userpfp);
                break;
        }

    } catch (err) {
        catchErr(err, message);
        message.reply(`cant do that member or that person doesn't exist`)
        bot.users.cache.get('752612067265216526').send('there was an error at ' + message.guild.name + " in " + "#" + message.channel.name);
        bot.users.cache.get('752612067265216526').send('```' + err + '```')
    }

})

bot.on('ready', () => {


})

bot.on('message', message => {

    try {

        let args = message.content.substring(PREFIX.length).split(" ");


        switch (args[0]) {
            case 'bot':
                var servers = new Discord.MessageEmbed()
                    .setTitle('About me')
                    .setDescription('im nice, ive been alive since 6-23-2021 :))), and im in version 2.00')
                    .addField(`the amount of servers im in`, bot.guilds.cache.size + ' servers')
                    .setColor(0xFFED5F)
                    .setThumbnail('https://cdn.discordapp.com/avatars/856344841801170974/6282ca1e30e1881717a5cb71ff7146f4.webp')
                    .setTimestamp()

                message.channel.send(servers);
                break;

        }

    } catch (err) {
        catchErr(err, message);
        message.reply('something was wrong')
    }

})

bot.on('ready', () => {

})

bot.on('ready', () => {

})

bot.on('message', message => {

    if(message.content === '#help') {
        bot.commands.get('help').execute(message, Discord, bot)
    }

})

bot.on('ready', () => {

})



bot.on('message', message => {

    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();
    let question = message.content.substring(PREFIX.length).split(" ");


    if (command === '8ball') {
        bot.commands.get('8ball').execute(message, args, Discord)
    }
})


bot.on('ready', () => {

})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    const fetch = require('node-fetch')

    switch (args[0]) {
        case 'meme':
            bot.commands.get('meme').execute(message, args, fetch, Discord, bot)
    }

})

bot.on('ready', () => {

})


bot.on("message", message => {

    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();


    const botChoice = Math.floor(Math.random() * 2) + 1
    let botEmoji;
    let playerEmoji
    let botChoiceStr

    if (command == 'rps') {

        if (!args[0]) return message.channel.send('pls choose rock paper or scissors');
        if (!['rock', 'paper', 'scissors'].includes(args[0])) return message.channel.send('you choice was invalid: rock paper or scissors')

        if (botChoice == 1) {
            botChoiceStr = "rock";
            botEmoji = ":rock: rock";
        }
        if (botChoice == 2) {
            botChoiceStr = "paper";
            botEmoji = ":newspaper: paper";
        }
        if (botChoice == 3) {
            botChoiceStr = "scissors";
            botEmoji = ":scissors: scissors";
        }

        if (args[0] == 'rock') playerEmoji = ':rock: rock';
        if (args[0] == 'paper') playerEmoji = ':newspaper: paper';
        if (args[0] == 'scissors') playerEmoji = ':scissors: scissors';

        if (botChoiceStr == args[0]) return message.channel.send(`I picked: ${botEmoji}, you picked:  ${playerEmoji}, we tied`);
        if (args[0] == 'paper') {
            if (botChoiceStr == 'scissors') return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you lost `);
            else return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you won! congrats :)`);
        } else if (args[0] == 'rock') {
            if (botChoiceStr == 'paper') return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you lost `);
            else return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you won! congrats :)`);
        } else if (args[0] == 'scissors') {
            if (botChoiceStr == 'rock') return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you lost `);
            else return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you won! congrats :)`);
        }
    }

})

const DisTube = require('distube');
const balanceSchema = require('./balanceSchema');
const distube = new DisTube(bot, {
    searchSongs: false,
    emitNewSongOnly: true
});

bot.on("ready", () => {

});


bot.on("message", async message => {
    // other code

    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    // Queue status template
    const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

    // DisTube event listeners, more in the documentation page

    distube.on("noRelated", message => message.channel.send("Can't find related video to play. Stop playing music."));

    if (command === "play") {
        if (message.author.id === bot.user.id) return;
        if (!message.member.voice.channel) return message.channel.send('you are not in a voice channel');
        if (!args[0]) return message.channel.send('you must play something');
        distube.play(message, args.join(" "));
        message.channel.send(`Playing: \`${message.content}\`\rRequested By: \`${message.author.tag}\``)
    }
    

    if (command === "stop") {
        const client = message.guild.members.cache.get(bot.user.id)
        if (client.voice.channel === message.member.voice.channel) {
            message.channel.send('You have stopped');
            if (!message.member.voice.channel) return message.channel.send('you are not in a voice channel');
            distube.stop(message);
        } else {
            return message.channel.send('you arent in the same vc');
        }

    }

    if (command == "volume") {
    var wasd = Number(args[0])
    distube.setVolume(message, wasd);
    message.channel.send(`Set Volume to ${wasd}`)
 }


    if (command === 'skip') {
        distube.skip(message);
        message.channel.send('Skipped!');
    }
    if (["loop", "repeat"].includes(command)) {
        let mode = distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        message.channel.send("Set repeat mode to `" + mode + "`");
    }
    
    if (command === "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
        ).join("\n"));
    }
    if (command === "filter") {
        if (!message.content.startsWith(PREFIX)) return;
        const command = args.shift();
        if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
            let filter = distube.setFilter(message, command);
            message.channel.send("Current queue filter: " + (filter || "Off"));
        }
    }
    if (command === 'pause') {
        const client = message.guild.members.cache.get(bot.user.id)
        if (client.voice.channel === message.member.voice.channel) {
            distube.pause(message);
            message.channel.send('Paused!')
        } else {
            message.channel.send('You are not in the same vc as the bot')
        }
    }
    if (['unpaused', 'unpause'].includes(command)) {
        const client = message.guild.members.cache.get(bot.user.id)
        if (client.voice.channel === message.member.voice.channel) {
            distube.resume(message)
            message.channel.send('Unpaused!')
        } else {
            message.channel.send('you are not in the same voice channel as the bot')
        }
    }


})

bot.on("ready", () => {

});

bot.on('message', async message => {

    try {
        const randomXP = Math.floor(Math.random() * 29) + 1;
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.author} you have leveled up to level ${user.level}!`);
        }

    } catch (err) {
        catchErr(err, message)

    }
})

bot.on("ready", () => {

});

bot.on('message', async message => {


    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (command === 'level') {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        let mentiondMember = message.mentions.users.first() || message.author;
        const target = await Levels.fetch(mentiondMember.id, message.guild.id);
        if (!target) return message.channel.send('That member doesnt have levels')
        var moreXp = Levels.xpFor(target.level + 1) - target.xp

        message.channel.send(`${message.author} is level ${user.level} and has ${target.xp} / ${Levels.xpFor(target.level + 1)}xp and only need ${moreXp} to be level ${user.level + 1}, keep it up! `)


    }
})

bot.on("ready", () => {

});

bot.on('message', async message => {

    try {

    if (!message.content.startsWith(PREFIX)) return;
 
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();


    if (["bal", "balance"].includes(command)) {
        bot.commands.get('bal').execute(message, args, Discord, bot, Balance, Bank)
    }

} catch (err) {
    catchErr(err, message);
    message.channel.send('YOU THOUGHT U CAN BREAK ME HA')
}


})

bot.on("ready", () => {

});

bot.on('message', async message => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (command === 'beg') {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before getting typing this again. - " + message.author.tag);
        } else {
            bot.commands.get('beg').execute(message, args, Balance)

            // Adds the user to the set so that they can't talk for a minute
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                talkedRecently.delete(message.author.id);
            }, 60000);
        }
    }

})

bot.on('ready', () => {

})

bot.on("message", async message => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (command === 'curse') {
        bot.commands.get('curseBob').execute(message, args, Balance, discordImageGen, Discord)
    }
})

bot.on('ready', () => {

});


bot.on('message', async message => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();
    if (command === 'pokemon') {
        bot.commands.get('pokemon').execute(message, args, Balance, RandoMon)
    }
});

bot.on('ready', () => {

})


bot.on("message", async message => {

    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (command == 'betRPS') {
        bot.commands.get('rps').execute(message, args, Balance)
        
    }

})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();


    if (command === 'bet') {
        bot.commands.get('bet').execute(message, args)
    }

})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (["dep", "deposit"].includes(command)) {
        bot.commands.get('deposit').execute(message, args, Balance, Bank)
    }
})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (command === 'withdraw') {
        bot.commands.get('withdraw').execute(message, args, Balance, Bank)
    }
});

bot.on('ready', () => {

})

bot.on('message', async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (!message.content.startsWith(PREFIX)) return;

        if (command === 'search') {
            if (searchRecently.has(message.author.id)) {
                message.channel.send("Wait 30 sec before getting typing this again. - " + message.author.tag);
            } else {
                bot.commands.get('search').execute(message, args, mongoose)
    
                // Adds the user to the set so that they can't talk for a minute
                searchRecently.add(message.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    searchRecently.delete(message.author.id);
                }, 30000);
            }
        }
})

bot.on('ready', () => {

})

bot.on('message', async message => {

try {
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();
    if (!message.content.startsWith(PREFIX)) return;

    if (command === 'pet') {
        bot.command.get('pet').execute(message, args)
    }
} catch (err) {
    catchErr(err, message);
}
})
bot.on('ready', () => {

})

bot.on('message', async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (!message.content.startsWith(PREFIX)) return;

    if (command === 'work') {
        if (workRecently.has(message.author.id)) {
            message.channel.send("Wait 50 minutes before getting typing this again. - " + message.author.tag);
        } else {

            bot.commands.get('work').execute(message, args)

            workRecently.add(message.author.id);
            setTimeout(() => {
                workRecently.delete(message.author.id);
            }, 3000000);
        }

    }
})

bot.on('ready', () => {

})

bot.on('message', async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (!message.content.startsWith(PREFIX)) return;
    if(command === 'invite') {
        bot.commands.get('invite').execute(message, args)
    }
})

bot.on('ready', () => {

})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift();

    if (!message.content.startsWith(PREFIX)) return;
    if(command === 'hack') {
        bot.commands.get('hack').execute(message, args)

    }

})

const SnakeGame = require('snakecord');


const snakeGame = new SnakeGame({

   title: 'Snake Game',

   color: "GREEN",

   timestamp: false,

   gameOverTitle: "Game Over"

});



bot.on('ready', () => {

});



bot.on('message', message => {

try {

 if (!message.content.startsWith(PREFIX)) return;

  let args = message.content.substring(PREFIX.length).split(" ");

  const command = args.shift().toLowerCase();

  if(command === 'snake' || command === 'snakegame' || command === 'snek') {

    return snakeGame.newGame(message);

    }
  } catch(err) {
      catchErr(err, message)
      message.channel.send('I need perm to edit message')
  }
})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ");

    const command = args.shift()

    if(command === 'bored') {
        bot.commands.get('bored').execute(message, args);
    }
})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ");

    const command = args.shift()

    if(command === 'petInfo') {
        bot.commands.get('petInfo').execute(message, args, Pet, PetName, Discord, bot);
    }
})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift()

    if(command === 'name') {
        bot.commands.get('name').execute(message, args, PetName);
    }
})

bot.on('ready', () => {

})

bot.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift()

    if(command === 'calculator' || command === 'cal' || command === 'calc') {
        bot.commands.get('cal').execute(message, args);
    }
})

bot.on('ready', () => {

})

bot.on('message', async message => {

    try {

    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift()
    var kid = message.mentions.users.first()

    var balanceProfile = await Balance.findOne({
        userID: message.author.id,
        guildID: message.guild.id
    });

    var kidProfile = await Balance.findOne({
        userID: kid.id,
        guildID: message.guild.id
    });

    if (!balanceProfile) balanceProfile = await new Balance({
        _id: mongoose.Types.ObjectId(),
        userID: mentiondMember.id,
        guildID: message.guild.id,
        lastedEdited: Date.now(),
    })

    var firstValue = Number(args[0])


    if(command === 'give' || 'dono' || 'donation') {
        await Balance.findOneAndUpdate({
            userID: kid.id,
            guildID: message.guild.id
        }, {
            Balance: kidProfile.Balance + firstValue
        });

        await Balance.findOneAndUpdate({
            userID: message.author.id,
            guildID: message.guild.id
        }, {
            Balance: balanceProfile.Balance - firstValue
        });

        if(firstValue < 0) return message.channel.send('must be a whole number')

        if(balanceProfile < firstValue) return message.channel.send('You dont have that much')

        message.channel.send(`Woah ${message.author} just gave ${firstValue} to ${kid}`)
    }


 } catch (err) {
    catchErr(err, message);
 }
})

bot.on('ready', () => {

})

bot.on("message", message => {
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    const command = args.shift()

    if(message.author.bot) return;
    if(command === 'server') {
        message.channel.send('https://discord.gg/XZ4ERYtZ5T heres the server')
    }
})
bot.login('ODU2MzQ0ODQxODAxMTcwOTc0.YM_rSA.m5aex2a3Pg5MtUNZ3TTUpi6DBI8')