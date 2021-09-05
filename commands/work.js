module.exports = {
    name: 'work',
    description: "work for cash!",
    async execute(message, args) {
        const Balance = require('../balanceSchema');
        var balanceProfile = await Balance.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });

        if (!balanceProfile) balanceProfile = await new Balance({
            _id: mongoose.Types.ObjectId(),
            userID: mentiondMember.id,
            guildID: message.guild.id,
            lastedEdited: Date.now(),
        })
        const workRecently = new Set();
        var jobs = [
            "builder",
            "nurse",
            "mechanic",
            "programmer",
            "chief",
            "artist",
        ]
        var job = jobs[Math.floor(Math.random() * (jobs.length))]
        var pay = Math.floor(Math.random() * 999) + 1
        if (workRecently.has(message.author.id)) {
            message.channel.send("Wait 50 minutes before getting typing this again. - " + message.author.tag);
        } else {

            // the user can type the command ... your command code goes here :)
            message.channel.send(`You worked as a **${job}** and got **${pay}**`)
            await Balance.findOneAndUpdate({
                userID: message.author.id,
                guildID: message.guild.id
            }, {
                Balance: balanceProfile.Balance + pay
            });

            // Adds the user to the set so that they can't talk for a minute
            workRecently.add(message.author.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                workRecently.delete(message.author.id);
            }, 3000000);
        }
    }
}