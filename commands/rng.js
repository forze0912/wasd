module.exports = {
    name: 'rng',
    description: "sends a random number",
    execute(message, wasd) {
        var firstValue = Number(wasd[0])
        if(!firstValue) return message.channel.send('need a number buddy')

      var answer = Math.floor(Math.random() * firstValue) + 0;
      message.channel.send(`${answer}`)
    }
}
