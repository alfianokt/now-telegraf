require('dotenv/config')
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN) // you can directly paste your bot token here

// read the https://telegraf.js.org for documentation
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

module.exports = bot