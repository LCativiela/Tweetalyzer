
//Available functions
const monkeyApi = {}

monkeyApi.getScore = async (text) => {

}

//Private functions
async function fetchTweets(hashtag){
    let response = T.get('search/tweets', 
        { q: '#'+ hashtag + ' since:2011-07-11', count: 100 })
    return (await response).data
}

module.exports =  monkeyApi 
  