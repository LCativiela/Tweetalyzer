var Twit = require('twit')
var T = new Twit({
    consumer_key:         process.env.TWITTER_API_KEY,
    consumer_secret:      process.env.TWITTER_API_KEY_SECRET,
    access_token:         process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//Available functions
const twitApi = {}

twitApi.fetchTweets = async (hashtag) => {
    console.log("Fetch #" + hashtag + " Tweets")
    let data = await fetchTweets(hashtag)
    return data

}

//Private functions
async function fetchTweets(hashtag){
    let response = T.get('search/tweets', 
        { q: '#'+ hashtag + ' since:2011-07-11', count: 100 })
    return (await response).data
}

module.exports =  twitApi 
  