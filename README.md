# Telegram Bot Video Downloader

This project is a Telegram bot built with the `Telegraf` library. The bot allows users to easily access a web application for downloading videos and audio files from YouTube. When users send the `/start` command, they receive an interactive button that opens the web app, where they can choose to download video or audio and send it directly to their Telegram chat.

## Key Features

- **Start Command**: The bot responds to the `/start` command, providing a link to launch the video downloader application.
- **Interactive Keyboard**: The bot generates an inline button that opens the web app directly within Telegram using the `WebApp` feature.
- **Query Parameters**: The user's ID and chat ID are passed as parameters to the web app, simplifying the user experience by pre-configuring the chat destination for downloads.
- **Web App Integration**: The Telegram bot and web app work together to allow easy video downloads and instant delivery to the designated Telegram chat.

## Technologies

- **Telegraf**: Used for building the Telegram bot functionality.
- **JavaScript** and **Node.js**: Powers the backend for command handling and user interactions.
- **Vercel Web App**: Hosts the web application for processing downloads.

## Getting Started

To run the bot locally, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set your Telegram bot token and web app URL.
4. Launch the bot with `node <your-bot-file.js>`.

This bot enables users to download and send multimedia content quickly and easily within Telegram chats.

## Local Setup Instructions

Follow these steps to set up and run the Telegram bot on your local machine.

### Prerequisites
- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/khusravkhon/tgbot.git
cd telegram-video-downloader
```
### 2.Install Dependencies

```bash
npm install
```

### 3.Run the Bot

```bash
node bot.js
```

## Contact

For more details about me and my other projects, please visit [my profile](https://khusravkhon.github.io/resume).
