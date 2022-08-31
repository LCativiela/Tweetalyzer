/**
 * Public functions
 */
const dataParser = {};

//Public method that fetches the last 100 tweets
dataParser.parseData = async (hashtag, data) => {
    let parsedData = await parse(hashtag,data)
    return parsedData
}

/**
 * Private functions
 */
async function parse(hashtag,raw){

    let data = {}
    //Fill object with main data
    data.hashtag = hashtag

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    data.date = utc

    data.frequency = undefined

    //Parse retrieved tweets and hashtags
    let tweetList = []
    let hashtags = {}

    //Get info from tweet
    for(var i in raw['statuses']){
        for( let j in raw['statuses'][i].entities.hashtags){
            let element = raw['statuses'][i].entities.hashtags[j].text
            
            if (hashtags[element]) {
                hashtags[element] += 1;
            } else {
                hashtags[element] = 1;
            }
              
        }
        let tweet = {
            id: raw['statuses'][i].id,
            created_at: raw['statuses'][i].created_at,
            text: raw['statuses'][i].full_text,
            user: raw['statuses'][i].user.id,
            userName: raw['statuses'][i].user.screen_name,
            location: raw['statuses'][i].user.location,
            photo: raw['statuses'][i].user.profile_image_url,
            score: undefined,
        }
        tweetList.push(tweet)
    }

    
    data.tweetList = tweetList
    console.log(tweetList)
    if(tweetList.length==0){
        data.empty = true
    } else{
        data.empty = false
    }
    data.hashtags = hashtagObject(hashtags)
    return data
}

//generate hashtag object for tag map
function hashtagObject(hashtags){
    const list = []
    for(let term of Object.keys(hashtags)){
        let object = {
            text: term,
            value: hashtags[term]
        }
        list.push(object)
    }
    return list
}

module.exports =  dataParser; 
  