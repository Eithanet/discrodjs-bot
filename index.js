const Discord = require('discord.js');
const Bot = new Discord.Client();
//const music = require('discord.js-music-v11');
//const token = "MzkyMjgyNzY3MTQ2MzUyNjUw.DRk_uQ.wLOsUBK40o4Q-dOuN-DuRtxTvn4" // Recommended to load from json file.
//const ms = require("ms");
//const ytdl = require('ytdl-core');

Bot.on('ready', () => {
    console.log(`im ready!`);
});

/** music(Bot, {
	prefix: '!',        // Prefix of '-'.
	global: false,      // Server-specific queues.
	maxQueueSize: 10,   // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: ''    // Name of voice channel to join. If omitted, will instead join user's voice channel.
});*/

const prefix = "!";

Bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`!הצטרף לשרת ${member.user.username}`);
});

function isAdmin(member) {
  return member.hasPermission("ADMINISTRATOR");
}

Bot.on("message", message => {
  if(message.author.Bot) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    //console.log(command);
    let args = message.content.split(" ").slice(1);
    let owner = message.guild.roles.find("name", "Owner");
    let admins = message.guild.roles.find("name", "Admins");
    let muteRole = message.guild.roles.find("name", "Muted");

    if(message.content == "מה קורה בוט") {
        message.channel.sendMessage("הכל בסדר אחשלי");
    }
    if(message.content == "בוט") {
        message.reply("מה אתה רוצה?");
    }
    if(message.content == "מה אתה משחק?") {
        message.reply("במשחק מגניב");
        Bot.user.setGame("Gta v");
    }
    if(command === "playtest") {
const streamOptions = { seek: 0, volume: 1 };
message.member.voiceChannel.join()
  .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=mvaLAs9cex4', { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
  })
  .catch(console.error);
    }
    if(command === "leave123") {
      message.member.voiceChannel.leave();
    }

    if(command === "test123") {
				if (message.member.voiceChannel) {
					message.member.voiceChannel.join().then(connection => {
						resolve(connection);
					}).catch(console.error);
    }
  }

    if(command === "delete") {
      if(!message.member.roles.has(admins.id)) {
        return message.reply("אין לך הרשאה לכך!");
      }

      let deletenumber = parseInt(args[0]);
      if(args[0] == null || args[0] == " " || args[0] == "undefined" || parseInt(args[0]) == 1 || parseInt(args[0]) > 100 || parseInt(args[0]) < 1) {
        message.reply("אנא הכנס מספר מ1-100");
      } else {
      let messagecount = parseInt(deletenumber);
      message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
      console.log(deletenumber + ` messages was deleted`);
      //message.channel.sendMessage(message.author + ` הודעות נמחקו על ידי ` + deletenumber);
      }
    }
    if(command === "eval") {
      if(message.author.id !== "286500449396326402") return;
      message.delete();
      message.channel.sendMessage(wrap(args.join(" ")));
  }
  if(command === "say") {
    if(message.author.id !== "286500449396326402") return;
    message.delete();
    message.channel.sendMessage(args.join(" "));
}
if(message.content.startsWith("!mute")) {
  let muteMember = message.mentions.members.first();
  if(!muteMember) {
    return message.reply("בבקשה תייג את המשתמש שברצונך לעשות לו מיוט")
  }
  if(!muteRole) {
    return message.reply("there is not role for muted");
  }
  let idk = message.content.split(" ");
  let time = message.content.split(" ")[2];
  if(!time) {
    message.reply("אתה צריך להגדיר לכמה זמן לעשות את המיוט");
  }
  muteMember.addRole(muteRole.id);
  console.log("mute");
  message.channel.send(`המשתמש ${muteMember.user.tag} הושתק ל ${time} דקות`)
  setTimeout(function() {
    let muteMember = message.mentions.members.first();
  muteMember.removeRole(muteRole.id);
    console.log("unmute");
}, (time*60000));
}
    if(command === "kick") {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.reply("אין לך הרשאה לכך!");
      }
      if(message.mentions.users.size === 0) {
        return message.reply("בבקשה תייג את המשתמש שברצונך לעשות לו קיק");
      }
      let kickMember = message.guild.member(message.mentions.users.first());
      if(!kickMember){
        return message.reply("משתמש לא תקין");
      }
      if(!message.guild.member(Bot.user).hasPermission("KICK_MEMBERS")){
        return message.reply("אין לבוט את ההרשאות לעשות קיק");
      }
      kickMember.kick().then(member => {
        message.reply(`קיבל קיק ${member.user.username} המשתמש`);
      }).catch(e => {
        console.error(e);
      });
    }
        if(command === "moveme") {
          switch (args[0]) {
            case 'General':
              message.guild.member(message.author.id).setVoiceChannel("341267944875229187");
              break;
              case 'Rocket Leauge':
              message.guild.member(message.author.id).setVoiceChannel("341333182429396994");
              break;
              case 'Music':
              message.guild.member(message.author.id).setVoiceChannel("341510563299328010");
              break;
              case 'general':
              message.guild.member(message.author.id).setVoiceChannel("341267944875229187");
              break;
              case 'rocket leauge':
              message.guild.member(message.author.id).setVoiceChannel("341333182429396994");
              break;
              case 'music':
              message.guild.member(message.author.id).setVoiceChannel("341510563299328010");
              break;
              case '1':
              message.guild.member(message.author.id).setVoiceChannel("341267944875229187");
              break;
              case '2':
              message.guild.member(message.author.id).setVoiceChannel("341333182429396994");
              break;
              case '3':
              message.guild.member(message.author.id).setVoiceChannel("341510563299328010");
              break;
            default:
              message.reply("אין צאט קולי כזה")
              break;
          }
        }

        if(command === "help" || command === "עזרה") {
          message.channel.sendMessage("בקרוב");
        }
       });
       function wrap(text) {
       	return '```\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n```';
       }
Bot.login(process.env.BOT_TOKEN);
