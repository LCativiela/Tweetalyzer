const { Router } = require("express");
const express = require("express");
const tweetalyzerController = require('../controller/tweetalyzerController')
 
// tweetalyzerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const tweetalyzerRoutes = express.Router();

//ROUTES
//Simple get last 100 tweets get
tweetalyzerRoutes.get('/:hashtag', tweetalyzerController.getTweets)
 

module.exports = tweetalyzerRoutes;