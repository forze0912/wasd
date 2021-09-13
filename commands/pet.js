module.exports = {
    name: 'pet',
    description: "gives u a pet!",
    async execute(message, args) {
        const Pet = require('../petSchema')
        var pets = [
            "dog",
            "cat",
            "hamster",
            "turtle",
            "rock",
            "air",
            "hedgehog"
        ]
        var petProfile = await Pet.findOne({
            userID: message.author.id,
            guildID: message.guild.id
        });

            if (!petProfile) {
                if (!petProfile) petProfile = await new Pet({
                    _id: mongoose.Types.ObjectId(),
                    userID: message.author.id,
                    guildID: message.guild.id,
                    lastedEdited: Date.now(),
                })
                await petProfile.save().catch(err => console.log(err));
                message.channel.send(`You dont have a pet pls choose one ${pets}`)
                return;
            }

            if(petProfile.Pet === 'undefined') {
                message.channel.send('You dont have a pet')
            }

            if ([!"dog", "cat", "hamster", "turtle", "rock", "air", "hedgehog"].includes(args[0])) return message.channel.send('That isnt a pet avaiable')
            if (message.content === '#pet dog') {
                message.channel.send('Your pet is now a dog!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'dog'
                });
            }
            if (message.content === '#pet cat') {
                message.channel.send('Your pet is now a cat!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'cat'
                });
            }
            if (message.content === '#pet hamster') {
                message.channel.send('Your pet is now a hamster!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'hamster'
                });
            }
            if (message.content === '#pet turtle') {
                message.channel.send('Your pet is now a turtle!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'turtle'
                });
            }
            if (message.content === '#pet rock') {
                message.channel.send('Your pet is now a rock!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'rock'
                });
            }
            if (message.content === '!pet air') {
                message.channel.send('Your pet is now air!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'air'
                });
            }
            if (message.content === '#pet hedgehog') {
                message.channel.send('Your pet is now a hedgehog!')
                await Pet.findOneAndUpdate({
                    userID: message.author.id,
                    guildID: message.guild.id
                }, {
                    Pet: petProfile.Pet = 'hedgehog'
                });
            }
        }
    }
