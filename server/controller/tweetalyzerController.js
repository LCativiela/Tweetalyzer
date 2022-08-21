const twitApi = require.main.require('./src/twitter/twitApi')

// This will help us connect to the database
const dbo = require("../db/conn");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const controller = { }

//Public methods
controller.getTweets = async (req, res) => {
    let data = await twitApi.fetchTweets(req.params.hashtag)
    data = parseData(data)
    res.send(data)

}



//Private methods
function parseData(data){
    
    for(var i in data['statuses']){
        console.log("\n\nPrinting tweet nº "+i)
        console.log(data['statuses'][i])
    }


    return data
}

module.exports =  controller