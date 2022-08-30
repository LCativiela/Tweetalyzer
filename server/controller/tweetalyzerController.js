const twitApi = require.main.require('./src/twitter/twitApi')
const dataParser = require.main.require('./src/dataParser')

// This will help us connect to the database
const dbo = require("../db/conn");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


const controller = { }

/**
 * Public functions
 */
controller.getTweets = async (req, res) => {
    try{
        //Get Twitter Data
        let data = await twitApi.fetchTweets(req.params.hashtag)
        //Parse it for the front end
        data = await dataParser.parseData(req.params.hashtag, data)
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



/**
 * Private functions
 */


//Send parsed object to database
async function storeData(hashtag, data){
    let db_connect = dbo.getDb();
    db_connect.collection("records").insertOne(data, function (err, res) {
        if (err) throw err;
    });
}

module.exports =  controller