const fs = require('fs')

const readUserXp = function(message) {
    fs.readFile('./db/database.json', 'utf-8', function(err, data) {
        if(err)
            throw err

        const obj = JSON.parse(data)
        const user = obj[message.guild.id].find(Element => Element.id === message.author.id)

        if(!user)
            return message.channel.send('Algo deu errado, úsuario não cadastrado')
        
        return message.channel.send(`${message.author.username}, você possui ${user.xp} de XP!`)
    })
}

module.exports = readUserXp