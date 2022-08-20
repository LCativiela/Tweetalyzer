var Twit = require('twit')
var T = new Twit({
    consumer_key:         process.env.TWITTER_API_KEY,
    consumer_secret:      process.env.TWITTER_API_KEY_SECRET,
    access_token:         process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })



async function fetchTweets(hashtag){
    const tweets = T.get('search/tweets', { q: '#'+hashtag + ' since:2011-07-11', count: 100 }, function(err, data, response) {
        console.log(data)
        return data
    })
}

module.exports = { fetchTweets }
  