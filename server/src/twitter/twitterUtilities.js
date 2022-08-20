const { userClient } = require ('./twitterApi');


async function fetchTweets(hashtag){
    var result = await getTimeline()
    console.log(result)

    console.log("search " + hashtag);
    return result;
}


module.exports = { fetchTweets }
        