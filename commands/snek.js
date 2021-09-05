module.exports = {
    name: 'hack',
    description: "hacks peoples acc",
    async execute(message, args) {
        var mentiond = message.mentions.users.first();
        if(!mentiond) return message.channel.send('You cant just hack air')
        if(mentiond.id === message.author.id) {
            message.channel.send('If you want to hack urself, just send the info here... you wont :>')
        } else {
            var msg = await message.channel.send(`time to hack ${mentiond}`);


            var funnyPasswords = [
                "pizza is something i like",
                "my mom looks like dora",
                "my pc is built like a toaster",
                "my cat loves to stretch",
            ]

            var funnyWords = [
                "e",
                "dora",
                "karen",
                "UrMomIsAHoe",
                "nice..."
            ]

            var funnyEmails = [
                "thisbotistrash@yahoo.com",
                "googleispoop@gmail.com",
                "haircut@4@gmail.com",
                "ithrewmykidintoablender@icloud.com",
                "helpmegoogleimstuckwithbing@yahoo.com"
            ]

            var funnyPassword = funnyPasswords[Math.floor(Math.random() * (funnyPasswords.length))]

            var funnyWord = funnyWords[Math.floor(Math.random() * (funnyWords.length))]

            var funnyEmail = funnyEmails[Math.floor(Math.random() * (funnyEmails.length))]

            setTimeout(() => {
                msg.edit(`getting acc info...`);
            }, 2000);

            setTimeout(() => {
                msg.edit(`${mentiond}\r Email: ${funnyEmail} \rPassword: ${funnyPassword}`);
            }, 4000);

            setTimeout(() => {
                msg.edit(`Getting most used word...`);
            }, 6000);

            setTimeout(() => {
                msg.edit(`Most used word ${funnyWord}`);
            }, 8000);

            setTimeout(() => {
                msg.edit(`getting IP...`);
            }, 10000);

            setTimeout(() => {
                msg.edit(`IP 420.6969.420`);
            }, 12000);

            setTimeout(() => {
                msg.edit(`importing my face into pc...`);
            }, 14000);

            setTimeout(() => {
                msg.edit(`success https://cdn.discordapp.com/emojis/870768053565128765.png?v=1`);
            }, 16000);

            setTimeout(() => {
                msg.edit(`stealing cracked emotes...`);
            }, 18000);

            setTimeout(() => {
                msg.edit(`stolen https://cdn.discordapp.com/attachments/858504999096549429/870472884567556136/779770048704282655.png`);
            }, 20000)

            setTimeout(() => {
                msg.edit(`The most dangerous and real hack has finished! (100% real)`);
           }, 22000)
         }
        }

    }