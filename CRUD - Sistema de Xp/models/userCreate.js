const fs = require('fs')

const userCreate = function(obj, message) {
    const userObj = {
        id: message.author.id,
        xp: 0,
        name: message.author.username
    }

    obj[message.guild.id].push(userObj)
    const write = JSON.stringify(obj, null, "\t")

    fs.writeFile('./db/database.json', write, 'utf-8', function(err) {
        if(err)
            throw err
    })
}

module.exports = userCreate