module.exports = {
  name: "invite",
  description: "Displays the link for inviting the bot to your server",
  execute(server, message) {
    server.channel.send("Gia mia glykia kalimera kai se allous servers mporeis na patiseis edw: https://discord.com/oauth2/authorize?client_id=1114491489284804658&permissions=534724470848&scope=bot.");
  }
};
