# now-telegraf
simple telegram deployed on [now][https://zeit.co/].

## development
copy `.env.example` to  `.env` and change `BOT_TOKEN` with your own bot token.

after that run `node dev` to run local development.

## deployment
you must have `now` cli in your engine you can download here https://zeit.co/download and login to your account.

and configure `now.json` (optional) after that you have to deploy to the server by command `now`.

after that configure the `webhook` with url you have from deployment, and dont forget to add `/secret-path` with your own path. 