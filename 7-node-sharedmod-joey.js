//Joey
var movie = require('./7-node-sharedmod-paul.js');
movie.favoriteMovie = "Barbie Allstars";
console.log("Joey's favorite movie is " + movie.favoriteMovie);


//Object factory
var restaurants = require('./8-node-objectfactory');

var joeysRestaurants = restaurants();
joeysRestaurants.favoriteRestaurant = "Salad City";
console.log("Paul's favorite restaurant is " + joeysRestaurants.favoriteRestaurant);
