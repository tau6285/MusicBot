


var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message))
{
	if (message.content === "/greeting")
	{
		bot.reply(message, "Welcome!")
	}
};

bot.loginWithToken("MjQwOTUyMzEzNTgwMDkzNDQ0.CvK2Bw.EI7xgn6dsnv6BaiLkEsOCG-RH7w
");