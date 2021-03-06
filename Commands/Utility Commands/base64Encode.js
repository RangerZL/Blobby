module.exports.run = async (bot, message, args) => {
    let code = args.join(" ");
    if(!code) return help.helpMessage(message)
    let embed = new Discord.RichEmbed()
        .setTitle("Base64 Encode")
        .setDescription(btoa(code))
        .setColor("#417af4")
    message.channel.send(embed)
}


exports.information = {
    trigger: {
        name: "encode",
        aliases: "enc",
    },
    permission: {
        perm: "Base64Encode",
        group: "Utility"
    },
    help: {
        name: "Encode",
        description: "Encodes normal string to Base64 string",
        usage: "<Normal String>",
        examples: ["SGVsbG8gV29ybGQ=", "SGV5LCBJJ20gQmxvYmJ5"]
    }
  }