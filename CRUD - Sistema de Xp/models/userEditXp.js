const fs = require('fs')

const userEditXp = function(user, obj) {
    const editXp = user.xp + 5
    user.xp = editXp
    const write = JSON.stringify(obj, null, "\t")

    fs.writeFile('./db/database.json', write, 'utf-8', function(err) {
        if(err)
            throw err
    })
}

module.exports = userEditXp