import { Telegraf } from "telegraf";
import startModule from "./startModule";

export default function Modules (bot: Telegraf) {
    startModule(bot)
}