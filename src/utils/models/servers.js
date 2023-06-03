const Guild = require('../../models/guild')
class Server {
  constructor({
    id,
    connection = null,
    channel = null,
    botChannel = null
  } = {}) {
    this.id = id
    this.connection = connection
    this.channel = channel
    this.botChannel = botChannel
  }
}

class ServerState {
  constructor() {
    Guild.find().then(guilds => {
      this.servers = {}
      guilds.forEach(guild => {
        this.servers[guild.guild_id] = new Server({
          id: guild.guild_id,
          quality: guild.quality,
        })
      })
      this.client = null
      this.prefix = process.env.PREFIX || "#"
    })
  }

  add(serverID, serverOptions) {
    this.servers[serverID] = new Server({ id: serverID, ...serverOptions })
  }

  get(serverID) {
    return this.servers[serverID]
  }

}

const state = new ServerState()

module.exports = { state, Server };