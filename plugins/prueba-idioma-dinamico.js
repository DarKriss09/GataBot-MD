const handler = async (m, {text, command, args, usedPrefix}) => {
let language = 'en'
m.reply(`${lenguajeGB['smsAvisoAG']()}`, language)
} 
handler.command = /^(prueba39)$/i
export default handler