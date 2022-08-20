const { TwitterApi } = require ('twitter-api-v2')
require("dotenv").config({ path: "../../config.env" });

const TwitterApiKey = process.env.TWITTER_API_KEY;
const TwitterApiKeySecret = process.env.TWITTER_API_KEY_SECRET;
const TwitterAccessToken = process.env.TWITTER_ACCESS_TOKEN;
const TwitterAccessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

// OAuth 1.0a (User context)
const userClient = new TwitterApi({
    appKey: TwitterApiKey,
    appSecret: TwitterApiKeySecret,
    accessToken: TwitterAccessToken,
    accessSecret: TwitterAccessTokenSecret,
});

module.exports = { userClient }