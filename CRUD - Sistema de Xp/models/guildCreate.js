const fs = require('fs')

const guildCreate = function(guild) {
    const guildObj = {
        [guild.id]: []
    }
    fs.readFile('./db/database.json', 'utf-8', function(err, data) {
        if(err)
            throw err
        
        const obj = JSON.parse(data)
        const addGuild = Object.assign(obj, guildObj)
        const write = JSON.stringify(addGuild, null, "\t")

        fs.writeFile('./db/database.json', write, 'utf-8', function(err) {
            if(err)
                throw err
        })
    })
}

module.exports = guildCreate