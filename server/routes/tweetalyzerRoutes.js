const { Router } = require("express");
const express = require("express");
const {
    getTweets
} = require('../controller/tweetalyzerController')
 
// tweetalyzerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const tweetalyzerRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;



//ROUTES
//Simple get last 100 tweets get
tweetalyzerRoutes.get('/:hashtag', getTweets)
 

module.exports = tweetalyzerRoutes;