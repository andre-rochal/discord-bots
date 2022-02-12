const fs = require('fs')

const guildDelete = function(guild) {
    fs.readFile('./db/database.json', 'utf-8', function(err, data) {
        if(err)
            throw err
        
        const obj = JSON.parse(data)
        delete obj[guild.id]
        const write = JSON.stringify(obj, null, "\t")
        fs.writeFile('./db/database.json', write, 'utf-8', function(err) {
            if(err)
                throw err
        })
    })
}

module.exports = guildDelete