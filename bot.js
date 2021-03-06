const Discord = require('discord.js'); 
const bot = new Discord.Client();
//подключаем файл конфигурации
let config = require('./botconfig.json'); 
let botinfo = require('./package.json'); 
//"достаём" токен и префикс
let token = config.token; 
let prefix = config.prefix;
let version = botinfo.version
//создаём ссылку-приглашение для бота
bot.on('ready', () => { 
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
});
//команда, и то, что она должна выполнить
bot.on('message', msg => {
    if (msg.content === prefix + 'привет') {
        msg.reply('ПРИВЕТ, ЛОЛ!');
    }
});
bot.on('message', msg => {
    if (msg.content === prefix + 'АУУУУУ') {
        msg.channel.send('@everyone ВЫ ГДЕЕЕЕ');
    }
});
bot.on('message', msg => {
    if (msg.content === 'ммм') {
        msg.reply('НЕ МЫ ЧИ');
    }
});
bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix + 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});
bot.on('message', message => {
  // If the message is "!version"
  if (message.content === prefix + 'version') {
    // Send the user's avatar URL
    message.reply(`My version is ${version}`);
  }
});
bot.login(token);