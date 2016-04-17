# 140list

This repo is composed by two parts, Angular client side and Node server side.

## Twitter API - Node - server side

Created a node app to make the calls to Twitter API.

The app in angular will consume this node app.

### Installation

Go to twitter-api folder inside the project. And then execute `npm install`.

This command will install:

- Express and its dependencies:
  - Body-parser
  - Cookie-parser
  - Multer
- [TwitterJSClient](https://github.com/BoyCook/TwitterJSClient)

Set the following ENV variables:

- TWITTER_CONSUMER_KEY,
- TWITTER_CONSUMER_SECRET,
- TWITTER_ACCESS_TOKEN,
- TWITTER_ACCESS_TOKEN_SECRET

It's necessary create a [Twitter app](https://dev.twitter.com/apps). There you get the keys to fill the ENV variables mentioned above.

After install all the dependencies, you can use the command `npm run-script run` to up the server.
