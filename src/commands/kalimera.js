const daysOfTheWeek = require('../utils/daysOfTheWeek')
const getKalimera = require('../utils/eikones.top/getKalimera')
const getKalimeraDay = require('../utils/eikones.top/getKalimeraDay')


module.exports = {
  name: 'kalimera',
  description: `\`${process.env.PREFIX}kalimera\` or \n\`${process.env.PREFIX}kalimera tetarti\`. The days of the week supported are ${daysOfTheWeek.join(', ')}.`,
  usage: `\`${process.env.PREFIX}kalimera\` or \n\`${process.env.PREFIX}kalimera tetarti\`. The days of the week supported are ${daysOfTheWeek.join(', ')}.`,
  async execute(server, message, args) {
    const day = args[0]
    if (day && daysOfTheWeek.includes(args[0])) {
      const kalimeraImage = await getKalimeraDay(day)
      return server.channel.send(kalimeraImage)
    }
    const kalimeraImage = await getKalimera()
    server.channel.send(kalimeraImage)
  }
};
