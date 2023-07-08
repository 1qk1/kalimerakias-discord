const getKalinyxta = require('../utils/eikones.top/getKalinyxta')


module.exports = {
  name: 'kalinyxta',
  description: `\`${process.env.PREFIX}kalinyxta\` or \`${process.env.PREFIX}kalinixta\`.`,
  usage: `\`${process.env.PREFIX}kalinyxta\` or \`${process.env.PREFIX}kalinixta\`.`,
  aliases: ['kalinixta'],
  async execute(server, message, args) {
    const kalinyxtaImage = await getKalinyxta()
    server.channel.send(kalinyxtaImage)
  }
};
