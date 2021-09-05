module.exports = {
    name: 'rps',
    description: "rps game",
    async execute(message, args, Balance) {
        var mentiondMember = message.author;
        var balanceProfile = await Balance.findOne({
            userID: mentiondMember.id,
            guildID: message.guild.id
        });
    
        const botChoice = Math.floor(Math.random() * 2) + 1
        let botEmoji;
        let playerEmoji
        let botChoiceStr
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
            if (botChoiceStr == 'scissors') {
                message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you lost and you also lost 100 coins`);
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance - 100
                });
            } else {
                message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you won! congrats :) you also won 100 coins!`);
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance + 100
                });
            }
            if (args[0] == 'rock') {
                if (botChoiceStr == 'paper') return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you lost you also lost 100 coins`);
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance - 100
                });
            } else {
                return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you won! congrats :) you also won 100 coins!`);
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance + 100
                });
            }
            if (args[0] == 'scissors') {
                if (botChoiceStr == 'rock') return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you lost you also lost 100 coins`);
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance - 100
                });
            } else {
                return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji} you won! congrats :) you also won 100 coins!`);
                await Balance.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Balance: balanceProfile.Balance + 100
                });
            }
        }
    }
}