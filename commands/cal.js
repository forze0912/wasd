module.exports = {
    name: 'cal',
    description: "calculates stuff",
    execute(message, args) {
        var firstValue = Number(args[0])
        var secondValue = Number(args[2])

        if(!firstValue) return message.channel.send('need 2 numbers buddy')
        if(!secondValue) return message.channel.send('need 2 numbers buddy')

        if(!["+", "-", "x", "/"].includes) return message.channel.send('Thats not a valid method')

        if (args[1] == '+') {
            var result = firstValue + secondValue
            message.channel.send(`${firstValue} + ${secondValue} = ${result}`)
        }

        if (args[1] == '-') {
            var result = firstValue - secondValue
            message.channel.send(`${firstValue} - ${secondValue} = ${result}`)
        }

        if (args[1] == 'x') {
            var result = firstValue * secondValue
            message.channel.send(`${firstValue} x ${secondValue} = ${result}`)
        }

        if (args[1] == '/') {
            var result = firstValue / secondValue
            message.channel.send(`${firstValue} / ${secondValue} = ${result}`)
        }
    }
}