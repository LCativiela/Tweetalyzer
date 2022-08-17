const TwitterApi = require ("twitter-api-v2");
require("dotenv").config({ path: "../../config.env" });


const Twitter_Api_Key = process.env.TWITTER_API_KEY;
const Twitter_Api_Key_Secret = process.env.TWITTER_API_KEY_SECRET;
const Twitter_Access_Token = process.env.TWITTER_ACCESS_TOKEN;
const Twitter_Access_Token_Secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
const Twitter_Bearer_Token = process.env.TWITTER_BEARER_TOKEN;



function fetchTweets(hashtag){
    var Result;

    console.log(Result);
    return Result;
}

fetchTweets("#elonmusk")
        