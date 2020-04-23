var Twitter = require('twitter');
var arr = require('./arr.js');
const randomItem = require('random-item');
require('dotenv/config');

var T = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

var selectArr = randomItem (arr);

function myFunction() {
    T.post('statuses/update', {status: selectArr}, function(error, tweet, response) {
        if (error) console.log("error", error);
        else console.log("Tweet enviado." + selectArr);
    });
};

setInterval(myFunction, 28800000);
