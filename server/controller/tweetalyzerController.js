const { fetchTweets } = require.main.require('./src/twitter/twitApi')
const getTweets = ((req, res) => {
    //Ask twitter for stuff and return
    //res.json(answer)
    const answer = fetchTweets(req.params.hashtag)
    res.json(result)
})
module.exports =  { getTweets }