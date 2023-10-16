# Telegram Authentication with NextAuth.js Example

This example demonstrates how to set up Telegram authentication using NextAuth.js along with other technologies such as Next.js, PrismaJS, Tailwind CSS, and ShadcnUI.

## Getting Started

Follow these steps to get started with the Telegram authentication example:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/TeaByte/telegram-auth-nextjs.git
   cd telegram-auth-nextjs
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Edit the `.env` File**

   Update the `BOT_TOKEN` and `BOT_USERNAME` values in the `.env` file with the data you obtained from [@BotFather](https://t.me/BotFather).

4. **Start the Development Server**

   ```sh
   npm run dev
   ```

5. **Expose Your Local Server with ngrok**

   If you want to test the authentication over the internet, you can use [ngrok](https://ngrok.com/) to expose your local server:

   ```sh
   ngrok http 3000
   ```

   Copy the ngrok URL generated and update the `NEXTAUTH_URL` in the `.env.local` file with it. Additionally, send the `/setdomain` command to [@BotFather](https://t.me/BotFather) with the ngrok URL to resolve the "Bot domain invalid" error.

Remember to replace placeholders and follow the instructions in the example to set up Telegram authentication for your Next.js application. This example combines the power of NextAuth.js, PrismaJS, Tailwind CSS, and ShadcnUI to create a seamless authentication experience using Telegram.

![Telegram Authentication Flow](https://i.ibb.co/h1sdVcG/Capture11.jpg)
