import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'
dotenv.config()
const BOT_TOKEN: string | any = process.env.BOT_TOKEN
const bot = new Telegraf(BOT_TOKEN)
import Modules from './modules'
import mongo from './utils/mongoose'
Modules(bot)

mongo().then(() => {console.log('MongoDB is running')}).catch((err) => {console.log(err)})

bot.launch().then(() => {
  console.log('Bot is running')
}).catch((err) => {console.log(err)})