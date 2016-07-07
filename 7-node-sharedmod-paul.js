//Paul
var movie = require('./7-node-sharedmod-paul.js');
movie.favoriteMovie = "The Godfather";
console.log("Paul's favorite movie is " + movie.favoriteMovie);


//Object factory
var restaurants = require('./8-node-objectfactory');

var paulsRestaurants = restaurants();
paulsRestaurants.favoriteRestaurant = "Thai City";
console.log("Paul's favorite restaurant is " + paulsRestaurants.favoriteRestaurant);
