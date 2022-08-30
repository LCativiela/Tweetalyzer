var Twit = require('twit')
var T = new Twit({
    consumer_key:         process.env.TWITTER_API_KEY,
    consumer_secret:      process.env.TWITTER_API_KEY_SECRET,
    access_token:         process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

/**
 * Public functions
 */
const twitApi = {}

//Public method that fetches the last 100 tweets
twitApi.fetchTweets = async (hashtag) => {
    console.log("Fetch #" + hashtag + " Tweets")
    let data = await fetchTweets(hashtag)
    return data

}

/**
 * Private functions
 */

//Fetch tweets from twitter
async function fetchTweets(hashtag){
    let response = T.get('search/tweets', 
        { q: '#'+ hashtag , count: 100, tweet_mode: 'extended'})
    return (await response).data
}

module.exports =  twitApi 
  