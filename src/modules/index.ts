import { Telegraf } from "telegraf";
import registerMenuModule from "./registerMenu";
import startModule from "./startModule";

export default function Modules (bot: Telegraf) {
    startModule(bot)
    registerMenuModule(bot)
}