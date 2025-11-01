import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.TOKEN;
const wedAppUrl = process.env.WED_APP_URL;

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    `Запустить мини-приложение для загрузки видео по ссылке. Ссылка на канал https://t.me/+rqOeZM6Fsd02N2Ri`,
    Markup.inlineKeyboard([
      Markup.button.webApp(
        `Запуск приложения`,
        `${wedAppUrl}?user_id=${ctx.from.id}&chat_id=${ctx.chat.id}&request_full_screen=true`
      ),
    ])
  );
});

bot.launch();
