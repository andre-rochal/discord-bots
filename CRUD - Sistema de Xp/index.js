//declarações
const Discord = require('discord.js')
const fs = require('fs')
const config = require('./config.json')

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

//funções CRUD DB
const guildCreate = require('./models/guildCreate') //create
const guildDelete = require('./models/guildDelete') //delete
const userCreate = require('./models/userCreate') //create
const userEditXp = require('./models/userEditXp') //update
const readUserXp = require('./models/readUserXp') //read

//eventos
client.on('guildCreate', function(guild) {
    guildCreate(guild)
})

client.on('guildDelete', function(guild) {
    guildDelete(guild)
})

client.on('messageCreate', function(message) {
    if(message.author.bot) return
    if(message.channel.type === 'DM') return

    fs.readFile('./db/database.json', 'utf-8', function(err, data) {
        const obj = JSON.parse(data)
        const user = obj[message.guild.id].find(element => element.id === message.author.id)

        if(user)
        {
            //edita xp
            userEditXp(user, obj)
        }
        else
        {
            //cria usuario
            userCreate(obj, message)
        }
    })
    if(message.content.startsWith('!meuxp')) {
        readUserXp(message)
    }
})

client.on('ready', function() {
    console.log(`Cliente logado com sucesso: ${client.user.tag}`)
})

//ligando o cliente
client.login(config.token)