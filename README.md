# @telegram-auth next-auth Example

-   [NextAuth.js](https://next-auth.js.org/)

## Get Started

1. Clone the repository

    ```sh
    git clone https://github.com/manzoorwanijk/telegram-auth.git
    cd telegram-auth
    ```

2. Install and build dependencies

    ```sh
    pnpm install
    pnpm kick-off
    ```

3. Go to the next-auth example folder

    ```sh
    cd examples/next-auth
    ```

4. Create a `.env.local` file by copying `.example.env.local` and update `BOT_TOKEN` and `BOT_USERNAME` with your bot's token and username that you got from [@BotFather](https://t.me/BotFather).

5. Start the dev server

    ```sh
    pnpm run dev
    ```

6. You may want to use [ngrok](https://ngrok.com/) to expose your local server to the internet.

    ```sh
    ngrok http 3000
    ```

    Copy the ngrok URL and update `NEXTAUTH_URL` in `.env.local` with it.

    Don't forget to send `/setdomain` command to [@BotFather](https://t.me/BotFather) with the ngrok URL to fix the "Bot domain invalid" error.
