import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'media',
            description: 'shows media section',
            category: 'media',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['7']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help8.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
Greetings ${M.sender.username}
    You requested ${this.client.config.prefix}media command
 \`\`\`👾Available Commands👾\`\`\`
   
        *━━━━❰ Media ❱━━━━*
 *- ${this.client.config.prefix}Blur*
 *- ${this.client.config.prefix}google*
 *- ${this.client.config.prefix}play*
 *- ${this.client.config.prefix}steal*
 *- ${this.client.config.prefix}retrieve*
 *- ${this.client.config.prefix}screenshot*
 *- ${this.client.config.prefix}advice*
 *- ${this.client.config.prefix}take : crop , stretch , author/pack*
 *- ${this.client.config.prefix}subred*
 *- ${this.client.config.prefix}yta*
 *- ${this.client.config.prefix}ytv*
 *- ${this.client.config.prefix}spotify*
 
  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
