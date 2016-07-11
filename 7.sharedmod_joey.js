//Joey
var movie = require('./7.sharedmod_paul.js');
movie.favoriteMovie = "Barbie Allstars";
console.log("Joey's favorite movie is " + movie.favoriteMovie);



var slackMessage = require('./7.sharedmod_paul.js');
slackMessage.generalChannel = "Paul is the greatest teacher ever!";
console.log("The most recent post is ", slackMessage.generalChannel);


//Object factory
var restaurants = require('./8.objectfactory');

var joeysRestaurants = restaurants();
joeysRestaurants.favoriteRestaurant = "Happy Dragon";
console.log("Joey wants to go to: " + joeysRestaurants.favoriteRestaurant);
