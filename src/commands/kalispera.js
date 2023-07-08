const getKalispera = require('../utils/eikones.top/getKalispera')


module.exports = {
  name: 'kalispera',
  description: `\`${process.env.PREFIX}kalispera\`.`,
  usage: `\`${process.env.PREFIX}kalispera\`.`,
  async execute(server, message, args) {
    const kalispeaImage = await getKalispera()
    server.channel.send(kalispeaImage)
  }
};
