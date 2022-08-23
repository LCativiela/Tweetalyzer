const twitApi = require.main.require('./src/twitter/twitApi')

// This will help us connect to the database
const dbo = require("../db/conn");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const controller = { }

//Public methods
controller.getTweets = async (req, res) => {
    try{
        //Get Twitter Data
        let data = await twitApi.fetchTweets(req.params.hashtag)
        //Parse it for the front end
        data = parseData(req.params.hashtag, data)
        //Store it on the database
        try{
            storeData(req.params.hashtag, data)
        }catch(e){
            console.log(e)
        }
        
        //Send back the information
        res.send(data)    
    }catch(e){
        console.log(e)
    }   
}



//Private methods
function parseData(hashtag,raw){
    let data = {}
    //Fill object with main data
    data.hashtag = hashtag

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    data.date = utc

    data.frequency = undefined

    //Parse retrieved tweets
    let tweetList = []
    for(var i in raw['statuses']){
        //console.log(raw['statuses'][i])
        let tweet = {
            id: raw['statuses'][i].id,
            text: raw['statuses'][i].text,
            user: raw['statuses'][i].user.id,
            userName: raw['statuses'][i].user.screen_name,
            photo: raw['statuses'][i].user.profile_image_url,
            score: undefined,
            n_hashtags: []
        }
        tweetList.push(tweet)
    }
    data.tweetList = tweetList
    return data
}

function storeData(hashtag, data){
    let db_connect = dbo.getDb();
    db_connect.collection("records").insertOne(data, function (err, res) {
        if (err) throw err;
    });
}

module.exports =  controller