module.exports = {
    name: 'invite',
    description: "invites bot!",
    execute(message, args) {
      message.channel.send('https://discord.com/api/oauth2/authorize?client_id=856344841801170974&permissions=0&scope=bot');
    }
}