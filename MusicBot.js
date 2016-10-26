


var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message))
{
	if (message.content === "/greeting")
	{
		bot.reply(message, "Welcome!")
	}
};

bot.loginWithToken("MjQwOTY3OTEzNDUwODk3NDA5.CvLH0g.cQkWtEn5X_UJ9oN9IJKnbM3lVM8");