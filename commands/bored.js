module.exports = {
    name: 'bored',
    description: "tells you what to do when bored",
    execute(message, args) {
      var boredOptions = [
          "go outside and play",
          "take a nap",
          "go watch netflix",
          "get a dog",
          "hangout with friends"
      ]

      var boredOption = boredOptions[Math.floor(Math.random() * (boredOptions.length))]

      message.channel.send(`hmm, ${message.author}, maybe try ${boredOption} ¯\\\_(ツ)\_/¯ `)
    }
}
